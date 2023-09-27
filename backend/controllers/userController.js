const User = require('../models/usersModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// get users
const getUsers = async (req, res) => {
    try{
        const user = await User.find({}).sort({createdAt: -1});
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

// get single user
const getSingleUser = async (req, res) =>{
    try{
        const {id} = req.params;
        // this checks if user id is valid and will avoid any internal errors
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No such User"})
        }

        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({error: "No such user!"});
        }
        res.status(200).json(user);

    }catch(error){
        return res.status(500).json({error: error});
    }
};

// delete user
const deleteUser = async (req, res) =>{
    const { id } =  req.params;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            
        }
        const user = await User.findByIdAndDelete({_id: id});
        if(!user){
            return res.status(404).json({error: "No such user!"});
        }
        return res.status(200).json(user);
    }catch(error){
        return res.status(400).json({error: error});
    }
}

// update user
const updateUser = async (req, res) =>{
    const { id } =  req.params;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Id is invalid"});
        }

        const user = await User.findByIdAndUpdate({_id: id}, {...req.body});
        if(!user){
            return res.status(404).json({error: "No such user!"});
        }
        return res.status(200).json(user);

    }catch(error){
        return res.status(400).json({error: error});
    }
}

// Export all the functions
module.exports = {
    getUsers,
    getSingleUser,
    deleteUser,
    updateUser
};