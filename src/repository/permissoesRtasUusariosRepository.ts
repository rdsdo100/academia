import {createQueryBuilder} from "typeorm";
import {UsuariosRotas} from "../entity/UsuariosRotas";

const buscarPermissoesRtasUusariosRepository = async () => {

 let buscarPrmissoes

    buscarPrmissoes = await createQueryBuilder('UsuariosRotas')
        .leftJoin('UsuariosRotas.usuariosIdFK' , 'ur')
        .leftJoinAndSelect('UsuariosRotas.rotasPermissoesIdFK' , 'ur2')

        .getMany();


    return buscarPrmissoes
};
export {
    buscarPermissoesRtasUusariosRepository
}