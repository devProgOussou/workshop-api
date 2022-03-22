const User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');


module.exports.createUser = async (request, response) => {
    const { lastname, firstname, email, password } = request.body;
    const slug = uuidv4();
    const user = await User.create({
        lastname,
        firstname,
        email,
        password,
        slug
    });
    response.status(201).json({
        message: "User created successfully",
        user
    })
}

module.exports.getUserByID = async (request, response) => {
    //request.params.id
    const { id } = request.params;
    const user = await User.findById({ _id: id })
    response.status(200).json({
        message: 'User fetched by id successfully',
        user
    })
}

module.exports.getUserBySLug = async (request, response) => {
    const { slug } = request.params;
    const user = await User.findOne({ slug: slug })
    response.status(200).json({
        message: 'User fetched by slug successfully',
        user
    })
}

module.exports.getUserByEmail = async (request, response) => {
    const { email } = request.params;
    const user = await User.findOne({ email: email });
    response.status(200).json({
        message: "User fetch by email",
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

module.exports.updateUser = async (request, response) => {
    const { id } = request.params;
    const { lastname, firstname, email, password } = request.body;
    const user = await User.findByIdAndUpdate({ _id: id }, {
        $set: {
            lastname,
            firstname,
            email,
            password
        },
    }, { new: true });
    response.status(200).json({
        message: "User updated successfully",
        user
    });
}

module.exports.deleteUser = async (request, response) => {
    const { id } = request.params;
    await User.findByIdAndDelete({ _id: id });
    response.status(200).json({
        message: "User deleted successfully"
    })
}