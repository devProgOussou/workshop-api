const User = require('../models/user.model');


module.exports.createUser = async (request, response) => {
    const { lastname, firstname, email, password } = request.body;
    const user = await User.create({
        lastname,
        firstname,
        email,
        password
    });
    response.status(201).json({
        message: "User created successfully",
        user
    })
}


module.exports.getAllUsers = async (request, response) => {
    const users = await User.find();
    response.status(200).json({
        message: "Users fetched successfully",
        users
    })
}