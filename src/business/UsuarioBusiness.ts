import { Usuarios } from '../entity/Usuarios';

import { deleteUsuarioIdRepository } from '../repository/usuarioRepository';

export default class UsuarioBusiness {
    async cadastroUsuarios(usuarios: Usuarios) {}

    async deletarUsuario(idDeletar: number) {
        const resposta = await deleteUsuarioIdRepository(idDeletar);
        return resposta;
    }
}
