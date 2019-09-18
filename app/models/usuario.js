const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    nome: { type:String,required:true},
    senha:{ type:String,required:true},
    casa:{type:String,required:true}
});

module.exports = mongoose.model("mmorpg",User);