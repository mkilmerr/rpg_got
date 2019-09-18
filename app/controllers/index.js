const user = require("../models/usuario");
const jogo  = require("../models/jogo");
module.exports.indexView = (app,req,res)=>{
    res.render('index');
}

module.exports.autenticar = async (app,req,res)=>{
    const {usuario,senha} = req.body;

    try{
        const userData = await user.find({nome:{$eq:usuario},senha:{$eq:senha}});
        const dadosJogo = await jogo.find({usuario:{$eq:usuario}});
        console.log(dadosJogo[0])
        console.log(userData)
        if(userData.length>0) {
            req.session.autorizado = true;
            req.session.nomeUsuario = usuario;
            req.session.casa = userData[0].casa;
            req.session.data = dadosJogo[0]
        }
        if (req.session.autorizado){
            return  res.render('jogo',{casaUsuario:userData[0].casa,dados:dadosJogo[0]})
        }
        else{
            res.send("usuário não cadastrado");
        }
       
    }catch(err){
        res.send("usuário não cadastrado");
    }
}
