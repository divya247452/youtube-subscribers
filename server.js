require('dotenv').config();
const connnectToDb = require('./db/connectDb')
const express = require('express');
const app = express();
const path = require('path')
const publicPath = path.join(__dirname, 'public');
const router = require('./routes/routes')
app.use('/api', router)

const port = process.env.PORT || 3000;

connnectToDb()

app.use(express.static(publicPath));


// Handles invalid Endpoints
app.use((req, res) => {
    res.status(404).send('404 Not Found \n Please Enter a Valid enpoint');
  });


app.listen(port, ()=>{
    console.log("Serer is running on 3000.");
})