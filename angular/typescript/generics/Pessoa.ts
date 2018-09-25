export default class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: string = '';

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

    public dizerCarroQueTem(): string {
        return this.carro;
    }
}
