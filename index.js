//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//
//Packages

const mongoose = require("./src/dbConnection");
const todos = require("./src/schemas/todoSchema");

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./routes/Routes");

const app = express();
//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

app.use(bodyParser.json());
app.use(cors());

app.listen(5050, () => {
    console.log('[📶]Server Is Running Properly ....\n[ℹ️]Port : 5050');
});

app.use("/todos", Routes);
//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//
