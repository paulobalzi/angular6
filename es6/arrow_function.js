// forma padrão
var dobroValor = function(numero) {
    return numero * 2
}
console.log(dobroValor(7))

// Array Function
// retira o "function"
// no caso de um parametro, os parenteses não são obrigatórios
// para mais de um parametros, precisa de parenteses
// para nenhum parametros, precisa de parenteses
// para somente uma linha de comando, as chaves são opcionais
var dobroValor = (numero) => {
    return numero * 2
}
console.log(dobroValor(9))

// versão customizada
var dobroValor = numero => numero * 2
console.log(dobroValor(18))

var dobroValor = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(dobroValor(10))
