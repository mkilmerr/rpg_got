const validacao = require("../validations/cadastroValidacao");
module.exports = app =>{
	app.get('/',(req,res)=>{
		app.app.controllers.index.indexView(app,req,res);
	});
	app.post('/autenticar',validacao.validarCamposLogin,(req,res)=>{
		app.app.controllers.index.autenticar(app,req,res);
	});
	
};