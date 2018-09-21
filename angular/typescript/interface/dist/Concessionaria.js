"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Concessionaria.prototype.fornecerHorariosFuncionamento = function () {
        return 'De segunda a sexta odia todo';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
