import { DaoInterface} from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {

	nomeTabela: string = 'tbl_concessionaria';

    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true;
    }

    atualizar(object: T): boolean {
        console.log('atualizando objeto' + object);
        return true;

    }

    remover(id: number): T {
        console.log('removendo objeto' + Object);
        return Object()
    }

    selecionar(id: number): T {
        console.log('retornando objeto' + id);
        return Object()
    }

    selecionarTodos(): [any] {
        console.log('retornando todos os objeto');
        return [Object()];
    }

}