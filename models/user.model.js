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
    },
    slug: {
        type: String,
        required: true
    }
})

//On exporte le module pour le rendre disponible dans notre application.
module.exports = mongoose.model('User', userSchema);

/*
    class Car {
        constructor(roues, marque, modele, annee) {
            this.roues = 4;
            this.marque = 'Peugeot';
            this.modele = '208';
            this.annee = '2019';
        }
        roule() {
            console.log(`La voiture roule avec ${this.roues} roues`);
        }
        voirVoiture () {
            console.log(`La voiture est une ${this.marque} ${this.modele} de ${this.annee}`);
        }
    }
    
    const mercedes = new Car(4, 'mercedes', 'classe A', '2019');
    mercedes.roule();
    mercedes.voirVoiture();
*/