const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Jogo = new Schema({
    usuario :{type:String},
    moeda : {type:Number,default:Math.floor(Math.random()*1000)},
    suditos :{type:Number,default:Math.floor(Math.random()*1000)},
    temor : {type:Number,default:Math.floor(Math.random()*1000)},
    sabedoria :  {type:Number,default:Math.floor(Math.random()*1000)},
    comercio : {type:Number,default:Math.floor(Math.random()*1000)},
    magia :  {type:Number,default:Math.floor(Math.random()*1000)},
});


module.exports = mongoose.model("jogo",Jogo);