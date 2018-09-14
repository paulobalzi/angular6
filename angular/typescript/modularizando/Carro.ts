// class: feature ES6
// O typescript infere:
//     - tipos de variáveis
//     - retorno da função
//     - visibilidade dos métodos

// default: só pode haver uma (exportação default)
export default class Carro {
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

// criando uma variável para ser importada em outro arquivo
export let qualquerCoisa: string = 'teste'