//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Packages
const mongoose = require("mongoose");
const mongo_URI = 'ENTER YOUR Mongodb URI'; //EDIT HERE


//Functions
mongoose.connect(mongo_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((db) => {
    console.log("[✅] DB Connected Successfully.");
}).catch((error) =>{
    console.log("[❌] DB Failed To Connect.", error)
})



module.exports = exports = mongoose;

//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//