module.exports.aldeoesView = (app,req,res)=>{
    if(req.session.autorizado)   res.render('aldeoes');
}