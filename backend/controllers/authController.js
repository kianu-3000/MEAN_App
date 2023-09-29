const User = require('../models/usersModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utilities/generateToken');
const maxTime = 3 * 24 * 60 * 60

// Login user authentication
const login = async (req, res) =>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({ username: username });
        // check if user exist
        if(!user){
            return res.status(401).json({message: "No such User!"});
        }
        // if user exist then check if user password matches
        await bcrypt.compare(password, user.password, (err, result) =>{
            if(err)
                return res.json({error: "Error in comparing passwords: " + err})

            if(result){
                const token = generateToken(user._id);
                res.cookie('jwt', token, {httpOnly: true, secure: true, maxAge: maxTime * 1000}); // * 1000
                return res.status(200).json(token);
            }

            else
                return res.status(404).json({message: `Incorrect password for user ${user.username}!`});
        })

    }catch(error){
        return res.status(500).json({message: error});
    }
}

// Register a new user
const register = async (req, res) => {
    // get the post request params
    const {
        username, 
        email,
        password,
        firstName,
        lastName, 
        middleName,
        birthDate,
        age,
        businessName,
        businessType,
        address, 
        description, 
        rating
    } = req.body;

    // Add to database
    try{
        // password encryption
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        const pass = hashPassword;

        const user = await User.create({
                username,
                email,
                password: pass, 
                firstName,
                lastName, 
                middleName,
                birthDate,
                age,
                businessName,
                businessType,
                address, 
                description,
                rating
            });

        res.status(200).json(user);

    }catch(error){
        res.status(400).json({error: "You suck " + error.message});
    }

}
// logout user
const logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
	return res.status(200).json({message: "Logged out"});
};

module.exports = {
    login,
    register,
    logout
};