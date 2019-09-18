const env = process.env.NODE_ENV || "dev";

const config = ()=>{
    switch(env){
        case 'dev':
            return{
                secretSession : "mmorpg_got_dev",
                resaveSession : false,
                saveUninitialized : false,
                url :  "mongodb://localhost/apimmo"
            }
        case 'html':
            return{
                secretSession : "mmorpg_got_dev",
                resaveSession : false,
                saveUninitialized : false,
                url :  "mongodb://localhost/apimmo"
            }
        case 'prod':
            return{
                secretSession : "mmorpg_got_dev",
                resaveSession : false,
                saveUninitialized : false,
                url :  "mongodb://localhost/apimmo"
            }
    }   
}

console.log(`ambiente rodando em ${env}`);
module.exports = config();