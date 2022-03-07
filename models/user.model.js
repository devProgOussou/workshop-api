const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    lastname: {
        type: String,
        minlenght: 3,
        maxlenght: 10,
        required: true
    },
    firstname: {
        type: String,
        minlenght: 3,
        maxlenght: 10,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: isEmail,
            message: '{VALUE} n\'est pas un email valide!'
        }
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 20
    }
})

//On exporte le module pour le rendre disponible dans notre application.
module.exports = mongoose.model('User', userSchema);