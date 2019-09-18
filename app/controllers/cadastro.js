const user = require("../models/usuario");
const jogo = require("../models/jogo");

module.exports.cadastroView = (app,req,res)=>{
    res.render('cadastro',{error : {}});
};

module.exports.cadastrar = async (app,req,res)=>{
    const {usuario,nome,casa,senha} = req.body;
    try{
        if(await user.findOne({usuario})) return res.send("usuário já castrado");
        const cadastroUsuario = user.create(req.body);
        const cadastroJogo = jogo.create(req.body);
       
       
        req.session.usuario = usuario
        res.redirect("/cadastro")
    }catch(err){
        return res.send(err);
    }
}

    