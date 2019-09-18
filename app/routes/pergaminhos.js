module.exports = app =>{
    app.get('/pergaminhos',(req,res)=>{
        if(req.session.autorizado){
            app.app.controllers.pergaminhos.pergaminhosView(app,req,res)
        }else{
            res.send("SEM PERMISSÃO!");
        }
       
    })
}