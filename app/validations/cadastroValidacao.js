const { check, validationResult } = require('express-validator/check'); 


exports.validarCamposCadastro = [
    check("nome","Nome não pode ser Vazio").not().isEmpty(),
    check("usuario","Usuario não pode ser vazio").not().isEmpty(),
    check("senha","Senha não pode ser vazia").not().isEmpty(),

    (req,res,next)=>{
        try{
            validationResult(req).throw();
            next();
        }catch(err){
            return res.status(400).send({err: "dados insuficientes "});
        }
    }
]

exports.validarCamposLogin = [
    check("usuario","Usuario não pode ser vazio").not().isEmpty(),
    check("senha","Senha não pode ser vazia").not().isEmpty(),

    (req,res,next)=>{
        try{
            validationResult(req).throw();
            next();
        }catch(err){
            return res.status(400).send({err: "dados insuficientes "});
        }
    }
]