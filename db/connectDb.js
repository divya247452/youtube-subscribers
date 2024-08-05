const dbURI = process.env.DB_API; // Retrieve database connection URI from environment variables
const mongoose = require('mongoose')

const connnectToDb = async ()=>{
    try{
        await mongoose.connect(dbURI);
    }catch(error){
        console.log(error);
    }
}

module.exports = connnectToDb;