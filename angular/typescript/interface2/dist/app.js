"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var PessoaDao_1 = require("./PessoaDao");
// o import aqui está sem chaves "{}" porque a classe
// Concessionaria foi declarada com "default"
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var dao = new ConcessionariaDao_1.ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
dao.inserir(concessionaria);
var dao2 = new PessoaDao_1.PessoaDao();
var pessoa = new Pessoa_1.default('', '');
dao2.selecionarTodos();
dao2.selecionar(2);
