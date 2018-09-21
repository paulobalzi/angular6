import Veiculo from './Veiculo'

// extends: herança
// Uma classe só pode herdar de somente uma outra classe terceira
export default class Carro extends Veiculo {
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        // necessário fazer a chamada da classe herdada. Pois o transpiler
        // gera o código utilizando "prototype"
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}

