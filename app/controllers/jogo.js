const Acao = require("../models/acao");
const tempoOpcao=null;
module.exports.jogoView = (app,req,res)=>{
    if(req.session.autorizado) return  res.render('jogo');
    res.send("SEM AUTORIZAÇÃO")
    
}

module.exports.sair = (app,req,res)=>{
    req.session.destroy(()=>{
        res.render("index")
    });
   
}

module.exports.valida = async (req,res,user)=>{
    
        Acao.acao = req.body;
       switch(Acao.acao.acao){
            case 1:  tempoOpcao = 1 * 60 * 6000;break;;
            case 2 :  tempoOpcao = 2 * 60 * 6000;break;
            case 3 :  tempoOpcao = 3 * 60 * 6000;break;
            case 4 :  tempoOpcao = 4 * 60 * 6000;break;
            case 5 :  tempoOpcao = 5 * 60 *6000;break;
       }
       const date = new Date();
        const data = {
            acao : Acao.acao.acao,
            quantidade : Acao.acao.quantidade,
            usuario: req.session.nomeUsuario,
            termina : date.getTime() + tempoOpcao,
        }
        req.session.acoes = data;
        const arrayData = [data.acao,data.quantidade,data.usuario,data.termina];
        Acao.create(data);
        req.session.dataAcao = arrayData;
        console.log(req.session.dataAcao[0])
        
        res.render("jogo",{casaUsuario:req.session.casa,dados:req.session.data})
    
}

