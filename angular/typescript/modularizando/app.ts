// impontando um módulo
// import { Carro } from './Carro'

// nesse caso estou importando do arquivo Carro.js, tanto a classe
// "Carro", quanto a constante "qualquerCoisa"
// import { Carro, qualquerCoisa } from './Carro'

// criando um alias
// assim, "x" sérá a referência de "qualquerCoisa" nesse script
// import { Carro, qualquerCoisa as x} from './Carro'

// Na exportação default, a declaração fica diferente. Fica fora das chaves
// Assim ai fica disponível a possibilidade de importar outros recursos 
// da classe
import Carro, { qualquerCoisa } from './Carro'

import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

// criar carros
let CarroA = new Carro('sandero', 5);
let CarroB = new Carro('fusca', 2);
let CarroC = new Carro('chevet', 2);

// montar lista de carros
// let listaCarros: Carro[] = [CarroA, CarroB, CarroC] --> mesma sintaxe
let listaCarros: Array<Carro> = [CarroA, CarroB, CarroC];
let concessionaria = new Concessionaria('Rua xpto', listaCarros);

// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());

// comprar carro
let cliente = new Pessoa('Paulo', 'sandero');
// console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map(function(carro: Carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem())
