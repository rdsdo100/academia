import { buscarAlunoRepository, cadastrarAlunos } from '../../repository/alunosRepository';
import { Pessoas } from '../../entity/Pessoas';
import { Enderecos } from '../../entity/Enderecos';
import { Emails } from '../../entity/Emails';
import { Telefones } from '../../entity/Telefones';
import { formatNome } from '../../util/formatNomes';

export default class AlunosBuisiness {
    async index() {
        const alunos = await buscarAlunoRepository();
        return alunos;
        let teste: string = 'ok';
    }

    async cadastrarAlunos(pessoas: Pessoas, enderecos: Enderecos, emails: Emails, telefones: Telefones) {
        pessoas.nome = formatNome(pessoas.nome);
        pessoas.sobrenome = formatNome(pessoas.sobrenome);

        const alunos = await cadastrarAlunos(pessoas, enderecos, emails, telefones);

        return alunos;
    }
}
