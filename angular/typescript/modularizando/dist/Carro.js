"use strict";
// class: feature ES6
// O typescript infere:
//     - tipos de variáveis
//     - retorno da função
//     - visibilidade dos métodos
Object.defineProperty(exports, "__esModule", { value: true });
// default: só pode haver uma (exportação default)
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
exports.default = Carro;
// criando uma variável para ser importada em outro arquivo
exports.qualquerCoisa = 'teste';
