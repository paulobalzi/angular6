"use strict";
// class: feature ES6
// O typescript infere:
//     - tipos de variáveis
//     - retorno da função
//     - visibilidade dos métodos
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    // quando definido como void, indica que a função não tem retorno
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    // number, define o retorno da função
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }
    Concessionaria.prototype.forncerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
// criar carros
var CarroA = new Carro('sandero', 5);
var CarroB = new Carro('fusca', 2);
var CarroC = new Carro('chevet', 2);
// montar lista de carros
// let listaCarros: Carro[] = [CarroA, CarroB, CarroC] --> mesma sintaxe
var listaCarros = [CarroA, CarroB, CarroC];
var concessionaria = new Concessionaria('Rua xpto', listaCarros);
// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
// comprar carro
var cliente = new Pessoa('Paulo', 'fusca');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
