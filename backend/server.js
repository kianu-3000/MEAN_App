require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// This is a middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

// Routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);


// Connect to Database
mongoose.connect(process.env.DB_CONNECTION) // returns a promise
    .then(()=>{
        console.log("Connected to MongoDB!");
        // Listens for request
        app.listen(process.env.PORT, ()=>{
            console.log(`Listening to PORT: ${process.env.PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

