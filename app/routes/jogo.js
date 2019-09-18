const jogoValidation = require("../validations/jogoValidation")
module.exports = app =>{
    app.get('/jogo',(req,res)=>{
        if(req.session.autorizado){
            app.app.controllers.jogo.jogoView(app,req,res);
        }else{
            req.session.destroy();
            res.send("sem autorizacao")
        }
    })

    app.get("/sair",(req,res)=>{
        app.app.controllers.jogo.sair(app,req,res)
    });

    app.post("/ordenar_acao",jogoValidation.validarCampo,(req,res)=>{
        app.app.controllers.jogo.valida(req,res,req.session.nomeUsuario);
    })
}