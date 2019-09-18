module.exports.pergaminhosView = (app,req,res)=>{
    res.render('pergaminhos',{acoes:req.session.dataAcao,});
}