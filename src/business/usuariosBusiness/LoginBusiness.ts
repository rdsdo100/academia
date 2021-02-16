import { assinar } from '../../config/Jwt';
import { buscarUsuarioRepository } from '../../repository/usuarioRepository';
import PermissoesBusiness from "./PermissoesBusiness";

export default class LoginBusiness {
    async index() {}

    async login(nomeUsuario: string, senha: string) {
        let authorization: string;
        let rotas
        const permissoesBusiness = new PermissoesBusiness()

        const getUsuario = await buscarUsuarioRepository(nomeUsuario);


        if (getUsuario?.nomeUsuario === nomeUsuario && getUsuario?.senha === senha) {
            authorization =  assinar(
                Number(getUsuario?.id),
                String(getUsuario?.nomeUsuario),
                Number(getUsuario.academiasIdFK),

            );

            rotas = await permissoesBusiness.buscarPermissoes(getUsuario.id)



            return {authorization, rotas }



        } else {
            return 'Error';
        }
    }
}
