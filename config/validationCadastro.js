
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');


exports.addUsuario = [
    check("nome","NOME INVÁLIDO").not().isEmpty(),
    check("usuario").not().isEmpty(),
    check("senha").not().isEmpty(),
    check("casa").not().isEmpty(),

        (req,res,next)=>{
            try{
                validationResult(req).throw();
                next();
            } catch(err){
                res.render('cadastro',{error : err.mapped()});
                return;
            }
        }
];

exports.autenticar = [
    check("usuario","USUARIO NÃO INSERIDO").not().isEmpty(),
    check("senha","SENHA NÃO INSERIDA").not().isEmpty(),

    (req,res,next)=>{
        try{
            validationResult(req).throw();
            next();
        }catch(err){
            res.send('ERRO');
            return;
        }
    }
];