"use strict";
// class: feature ES6
// O typescript infere:
//     - tipos de variáveis
//     - retorno da função
//     - visibilidade dos métodos
var Carro3 = /** @class */ (function () {
    function Carro3(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    // quando definido como void, indica que a função não tem retorno
    Carro3.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro3.prototype.parar = function () {
        this.velocidade = 0;
    };
    // number, define o retorno da função
    Carro3.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro3;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.forncerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria('Av Paulista');
console.log(concessionaria);
