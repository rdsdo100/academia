import {Usuarios} from "../entity/Usuarios";

import {cadastrarUsuarioRepository, deleteUsuarioIdRepository} from "../repository/usuarioRepository";

export default class UsuarioBusiness{

    async cadastroUsuarios(usuarios : Usuarios){

        const usuariosSalvar =  await cadastrarUsuarioRepository(usuarios)
        return usuariosSalvar
    }

    async deletarUsuario(idDeletar : number){

        const resposta = await deleteUsuarioIdRepository(idDeletar)
        return resposta
    }

}
