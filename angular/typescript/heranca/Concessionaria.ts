import Carro from './Carro'

// export: faz com que a classe vire um módulo
// 
export default class Concessionaria {
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