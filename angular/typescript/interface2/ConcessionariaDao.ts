import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tbl_concessionaria';

    inserir(object: Concessionaria): boolean {
        console.log('lógica de insert')
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log('atualizando objeto' + object);
        return true;

    }

    remover(id: number): Concessionaria {
        console.log('removendo objeto' + Object);
        return new Concessionaria('',[])
    }

    selecionar(id: number): Concessionaria {
        console.log('retornando objeto' + id);
        return new Concessionaria('',[])
    }

    selecionarTodos(): [any] {
        console.log('retornando todos os objeto');
        return [new Concessionaria('', [])];
    }
}
