// class: feature ES6
// O typescript infere:
//     - tipos de variáveis
//     - retorno da função
//     - visibilidade dos métodos
class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    // quando definido como void, indica que a função não tem retorno
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    // number, define o retorno da função
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    // any: pode receber qualquer tipo de dado
    // criado para agilizar a transição do typescript para o javascript convencional
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaCarros
    }

    public forncerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}

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
let cliente = new Pessoa('Paulo', 'fusca');
// console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map(function(carro: Carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem())
