import { ConcessionariaInterface } from './ConcessionariaInterface';
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
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

    public fornecerHorariosFuncionamento(): string {
        return 'De segunda a sexta odia todo';
    }
}
