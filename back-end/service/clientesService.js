const clientesData = require('../data/clientesData')

exports.getClientes = function () {
    return clientesData.getClientes()
}
exports.postCliente = function (cliente, id) {
    return clientesData.postCliente(cliente, id)
}

exports.loginCliente = function (login) {
    return clientesData.loginCliente(login)
}