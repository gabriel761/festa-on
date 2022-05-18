const pessoaData = require("../data/pessoaData")

exports.postPessoa = function (nome, email, senha, tipoPessoa){
    return pessoaData.postPessoa(nome, email, senha, tipoPessoa)
    
}   