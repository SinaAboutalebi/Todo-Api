//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//

const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    Title:{ 
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Completed:{
        type: Boolean,
        default: 0
    }
});

module.exports = mongoose.model("todos", todosSchema);
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
