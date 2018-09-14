"use strict";
// impontando um módulo
// import { Carro } from './Carro'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// nesse caso estou importando do arquivo Carro.js, tanto a classe
// "Carro", quanto a constante "qualquerCoisa"
// import { Carro, qualquerCoisa } from './Carro'
// criando um alias
// assim, "x" sérá a referência de "qualquerCoisa" nesse script
// import { Carro, qualquerCoisa as x} from './Carro'
// Na exportação default, a declaração fica diferente. Fica fora das chaves
// Assim ai fica disponível a possibilidade de importar outros recursos 
// da classe
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// criar carros
var CarroA = new Carro_1.default('sandero', 5);
var CarroB = new Carro_1.default('fusca', 2);
var CarroC = new Carro_1.default('chevet', 2);
// montar lista de carros
// let listaCarros: Carro[] = [CarroA, CarroB, CarroC] --> mesma sintaxe
var listaCarros = [CarroA, CarroB, CarroC];
var concessionaria = new Concessionaria_1.default('Rua xpto', listaCarros);
// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
// comprar carro
var cliente = new Pessoa_1.default('Paulo', 'sandero');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
