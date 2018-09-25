import { ConcessionariaDao } from './ConcessionariaDao';
import { PessoaDao } from './PessoaDao';

// o import aqui está sem chaves "{}" porque a classe
// Concessionaria foi declarada com "default"
import  Concessionaria  from './Concessionaria';
import  Pessoa  from './Pessoa';


let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

dao2.selecionarTodos()
dao2.selecionar(2)