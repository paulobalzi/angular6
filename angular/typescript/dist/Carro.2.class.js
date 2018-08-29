"use strict";
// class: feature ES6
// O typescript infere:
//     - tipos de variáveis
//     - retorno da função
//     - visibilidade dos métodos
var Carro2 = /** @class */ (function () {
    function Carro2(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    // quando definido como void, indica que a função não tem retorno
    Carro2.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro2.prototype.parar = function () {
        this.velocidade = 0;
    };
    // number, define o retorno da função
    Carro2.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro2;
}());
var carroA = new Carro2('Veloster', 3);
carroA.acelerar();
console.log(carroA);
