import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tbl_pessoa';

    inserir(object: Pessoa): boolean {
        console.log('lógica de insert')
        return true;
    }

    atualizar(object: Pessoa): boolean {
        console.log('atualizando objeto' + object);
        return true;
    }

    remover(id: number): Pessoa {
        console.log('removendo objeto' + Object);
        return new Pessoa('','')
    }

    selecionar(id: number): Pessoa {
        console.log('retornando objeto' + id);
        return new Pessoa('','')
    }

    selecionarTodos(): [any] {
        console.log('retornando todos os objeto');
        return [new Pessoa('', '')];
    }
}
