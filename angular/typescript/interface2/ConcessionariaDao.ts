import { DaoInterface } from './DaoInterface'

class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tbl_concessionaria';

    inserir(object: any): boolean {
        // logica de insert
        console.log('lógica de insert')
        return true;
    }

    atualizar(object: any): boolean {

    }

    remover(id: number): any {

    }

    selecionar(id: number): any {

    }

    selecionarTodos(): [any] {

    }

}
