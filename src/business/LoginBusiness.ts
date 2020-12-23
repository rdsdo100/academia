import {assinar} from "../config/Jwt";
import {buscarUsuarioRepository} from "../repository/UsuarioRepository";

export default class LoginBusiness {

    async index(){

    }

    async login(nomeUsuario: string , senha : string) {
        let authorization: string

            const getUsuario = await buscarUsuarioRepository(nomeUsuario)

            if ((getUsuario?.nomeUsuario === nomeUsuario)&& (getUsuario.senha === senha)){

                 return authorization =  assinar(
                    Number(getUsuario?.id)
                    , String(getUsuario?.nomeUsuario))
            } else {
                return 'Error'
            }
    }
}