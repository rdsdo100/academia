import { Pessoas } from '../../entity/Pessoas';
import { Enderecos } from '../../entity/Enderecos';
import { Emails } from '../../entity/Emails';
import { Telefones } from '../../entity/Telefones';
import { formatNome } from '../../util/formatNomes';
import { Usuarios } from '../../entity/Usuarios';
import {cadastrarUsuariosRepository, listUsuarioRepository} from '../../repository/usuarioRepository';

export default class UsuariosBuisiness {
    async index() {
        const usuario = await  listUsuarioRepository()
        return usuario
    }

    async cadastrarAlunos(
        pessoas: Pessoas,
        enderecos: Enderecos,
        emails: Emails,
        telefones: Telefones,
        usuarios: Usuarios,
    ) {
        pessoas.nome = formatNome(pessoas.nome);
        pessoas.sobrenome = formatNome(pessoas.sobrenome);

        const usuario = await cadastrarUsuariosRepository(pessoas, enderecos, emails, telefones, usuarios);

        return usuario;
    }
}
