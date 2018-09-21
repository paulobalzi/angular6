import Veiculo from './Veiculo'

class Moto extends Veiculo {
    // sobrescrevendo um método
    public acelerar(): void {
        this.velocidade = this.velocidade + 20
    }
}

// outra forma de exportação de módulos
export default Moto
