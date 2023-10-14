require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// These are middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);


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

// app.listen(process.env.PORT, ()=>{
//     console.log(`Listening to PORT: ${process.env.PORT}`);
// });
