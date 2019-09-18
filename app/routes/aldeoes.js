module.exports = app=>{
    app.get('/aldeoes',(req,res)=>{
        app.app.controllers.aldeoes.aldeoesView(app,req,res)
    })
}