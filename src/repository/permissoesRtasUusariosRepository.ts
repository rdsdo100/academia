import {createQueryBuilder, getManager, In} from "typeorm";
import {Usuarios} from "../entity/Usuarios";
import {UsuariosRotas} from "../entity/UsuariosRotas";

const buscarPermissoesRtasUusariosRepository = async () => {

 let buscarPrmissoes
const repostory = getManager()




    /*
        buscarPrmissoes = await createQueryBuilder('Pessoas')
            .leftJoinAndSelect('Pessoas.enderecosIdFK', 'persons')
            .leftJoinAndSelect('Pessoas.emailsIdFK', 'items')
            .leftJoinAndSelect('Pessoas.telefonesIdFK' , 'ok')
            .getMany();
    */

    buscarPrmissoes = await createQueryBuilder('UsuariosRotas')
        .leftJoin('UsuariosRotas.usuariosIdFK' , 'ur')
        .leftJoinAndSelect('UsuariosRotas.rotasPermissoesIdFK' , 'ur2')

        .getMany();


    return buscarPrmissoes
};
export {
    buscarPermissoesRtasUusariosRepository
}