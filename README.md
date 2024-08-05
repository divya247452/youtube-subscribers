# Youtube Subscribers App

Welcome to the **Youtube Subscribers App**! This application provides a simple interface to interact with a MongoDB database containing information about Youtube subscribers.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction
The **Youtube Subscribers App** is a web application built with Express.js and MongoDB. It allows you to fetch and display subscriber data through various API endpoints. This app serves as a basic demonstration of RESTful API principles and MongoDB interactions.

## Features
- Fetch all subscribers from the database
- Retrieve names and subscribed channels of subscribers
- Get details of a subscriber by their ID

## Installation

### Prerequisites
- Node.js and npm installed on your system
- MongoDB server running locally or remotely

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/divya247452/youtube-subscribers.git
    cd youtube-subscribers
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up MongoDB:**
    Ensure your MongoDB server is running and accessible. The app is configured to connect to a MongoDB instance running on `mongodb://localhost:27017/youtubeSubscribers`.

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Access the application:**
    Open your browser and go to `http://localhost:3000` to view the app.

## Usage
### Frontend
The frontend is a simple HTML page with buttons to interact with the API. It includes:
- **Get Subscribers:** Fetches and displays all subscribers.
- **Get Subscribers Names:** Fetches and displays the names and subscribed channels of all subscribers.
- **Get Subscriber by ID:** Allows you to input a subscriber ID to fetch their details.

### Backend
The backend is built with Express.js and includes the following routes:
- `/api/subscribers`: Fetches all subscribers.
- `/api/subscribers/names`: Fetches names and subscribed channels of all subscribers.
- `/api/subscribers/:id`: Fetches a subscriber by their ID.

## API Endpoints
### GET /api/subscribers
Fetches a list of all subscribers from the database.
- **Response:** 
    ```json
    [
        {
            "_id": "60c72b1f4f1a2c1a88e4d5b6",
            "name": "John Doe",
            "subscribedChannel": "Tech Channel",
            "subscribedDate": "2021-06-13T00:00:00.000Z"
        },
        ...
    ]
    ```

### GET /api/subscribers/names
Fetches names and subscribed channels of all subscribers.
- **Response:**
    ```json
    [
        {
            "name": "John Doe",
            "subscribedChannel": "Tech Channel"
        },
        ...
    ]
    ```

### GET /api/subscribers/:id
Fetches a subscriber by their ID.
- **Response:**
    ```json
    {
        "_id": "60c72b1f4f1a2c1a88e4d5b6",
        "name": "John Doe",
        "subscribedChannel": "Tech Channel",
        "subscribedDate": "2021-06-13T00:00:00.000Z"
    }
    ```
 
## Technologies Used
- **Frontend:** HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## License
&copy; 2024, Divya Pratap

---

Feel free to contribute to this project by forking the repository and submitting pull requests. For any issues or suggestions, please open an issue on GitHub.

