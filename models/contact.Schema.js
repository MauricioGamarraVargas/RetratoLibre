const mongoose = require('mongoose');

let schema = mongoose.Schema;

const contactShema = new schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    whatsapp:{
        type: Number,
    },
    phone:{
        type: Number,
    },
    street:{
        type: String,
    },
    intersection:{
        type: String,
    }
});

module.exports = mongoose.model('contacts', contactShema);
// const contacts = new contact({name:'mauricio', email:'mgv@gmail.com', whatsapp:72282312, phone: 4244954, street:'adela zamudio', intersection: 'y America'});
// contacts.save().then(() => console.log('yeah!'));