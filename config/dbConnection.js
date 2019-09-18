const mongo = require("mongodb");

const connMongoDB = module.exports = ()=>{
    console.log("entrou na função de conexao")
    const db = new mongo.Db(
        "got",
        new mongo.Server(
            "localhost",
            27017,
            {}
        ),
        {}
    );

    return db;
}

module.exports = ()=>{
    return connMongoDB;
}

