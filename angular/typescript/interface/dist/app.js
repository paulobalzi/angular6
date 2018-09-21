"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ccs = new Concessionaria_1.default('Rua A', []);
console.log(ccs.fornecerHorariosFuncionamento());
