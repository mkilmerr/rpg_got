const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Acao = new Schema({
    usuario : {type:String},
    quantidade : {type:Number},
    acao:{type:Number},
    termina:{type:Number}
});


module.exports = mongoose.model("acao",Acao);