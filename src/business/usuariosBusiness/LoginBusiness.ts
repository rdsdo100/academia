import { assinar } from '../../config/Jwt';
import { buscarUsuarioRepository } from '../../repository/usuarioRepository';

export default class LoginBusiness {
    async index() {}

    async login(nomeUsuario: string, senha: string) {
        let authorization: string;

        const getUsuario = await buscarUsuarioRepository(nomeUsuario);

        if (getUsuario?.nomeUsuario === nomeUsuario && getUsuario?.senha === senha) {
             authorization =  assinar(
                Number(getUsuario?.id),
                String(getUsuario?.nomeUsuario),
                Number(getUsuario.academiasIdFK),
            );


             return {
                 authorization,
                 logado : true,

             }


        } else {
            return 'Error';
        }
    }
}
