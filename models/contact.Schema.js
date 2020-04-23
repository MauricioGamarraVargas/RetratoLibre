const mongoose = require('mongoose');

let schema = mongoose.Schema;

const contactShema = new schema({
    name:{
        type: String,
        required:[true, 'Nombre completo es requerido'], 
        maxlength : [ 40, 'El nombre no puede exceder los 40 caracteres'],
    },
    email:{
        type: String,
        required:[true, 'El email es requerido'], 
        maxlength : [ 100, 'El email no puede exceder los 100 caracteres'],
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido'] // <- Validación para email
    },
    whatsapp:{
        type: Number,
        required:[true, 'Número de whatsapp es requerido'],
        min:[59999999, 'Ingrese un nuemero valido'],
        max:[79999999, 'Ingrese un numero valido'],
    },

    phone:{
        type: Number,
        max:[9999999, 'Ingrese un número telefonico valido'],
    },
    street:{
        type: String,
        required:[true, 'Calle o Av. principal es requerido'], 
    },
    intersection:{
        type: String,
        required:[true, 'Calle o Av. de intersección es requerido'],
    }
});

module.exports = mongoose.model('contacts', contactShema);
// const contacts = new contact({name:'mauricio', email:'mgv@gmail.com', whatsapp:72282312, phone: 4244954, street:'adela zamudio', intersection: 'y America'});
// contacts.save().then(() => console.log('yeah!'));