const validacao= require("../validations/cadastroValidacao");
module.exports = app=>{
    app.get('/cadastro',(req,res)=>{
        app.app.controllers.cadastro.cadastroView(app,req,res);
    });

    app.post('/cadastrar',validacao.validarCamposCadastro,(req,res)=>{
        app.app.controllers.cadastro.cadastrar(app,req,res);
    })
}