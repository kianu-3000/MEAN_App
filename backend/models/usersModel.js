const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({ // this defines the structure

    username:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: true
    },
    birthDate:{
        type: Date,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    businessName:{
        type: String,
        required: true
    },
    businessType:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);