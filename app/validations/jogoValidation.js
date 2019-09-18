const {check, validationResult} = require("express-validator/check");

exports.validarCampo = [
    check("acao").not().isEmpty(),
    check("quantidade").not().isEmpty(),

    (req,res,next)=>{
        try{
            validationResult(req).throw(),
            next()
        } catch (err){
            return  res.render('jogo',{casaUsuario: req.session.casa,dados:req.session.data})
        }
    }
]