// Var, Let e const

// Escopo global
//      Escopo de função: function() { ... }
//          Escopo de bloco: while() { ... }

// Uso do "Var"
// 1. declarado fora do escopo de uma função: escopo global
// 2. declarado dentro de um função: escopo da função
// 3. declarado dentro de um bloco: escopo global ou função, dependendo de onde
// foi declarado
// hoisting: quando a variável declarada com "Var" sofre uma elevação, ou seja,
// passa a fazer parte do escopo superior

var serie = 'Friends'

// cria constantes
// despois de criada não é modificada
// segue o contexto do let, se mantém no escopo que foi declarado
const nome = 'paulo'

if (true) {
    let serie = 'Game of thrones'
    console.log(serie)
}
console.log(serie)

// NESSE EXEMPLO OCORRE UM CONFLITO
// como a variável "serie" foi declarada com let no escopo principal e ao fazer
// a segunda declaração, dentro do escopo do comando com o "Var", ocorre o hoisting
// e conflita com a varável "serie" já existente no escopo global
// let serie = 'Friends'
// if (true) {
//     var serie = 'Game of thrones'
// }
