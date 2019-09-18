function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.insert(usuario);

			mongoclient.close();
		});
	});
}

/*
UsuariosDAO.prototype.autenticar = async (usuario, req, res)=>{
	
	/*
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find({usuario : {$eq : usuario.usuario},senha : {$eq : usuario.senha}}).toArray(function(err, result){
				console.log(err)
				console.log(result)
				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if(req.session.autorizado){
					
					res.render("jogo");
				} else {
					console.log(req.body)
					res.render("index", {validacao: {}});
				}

			});
			mongoclient.close();
		});
	});
*/



module.exports = function(){
	return UsuariosDAO;
}