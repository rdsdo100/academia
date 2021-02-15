import {createQueryBuilder, getManager, In} from "typeorm";
import {Usuarios} from "../entity/Usuarios";

const buscarPermissoesRtasUusariosRepository = async () => {

 let buscarPrmissoes
const repostory = getManager()



    buscarPrmissoes = await createQueryBuilder('Pessoas')
        .leftJoinAndSelect('Pessoas.enderecosIdFK', 'persons')
        .leftJoinAndSelect('Pessoas.emailsIdFK', 'items')
        .leftJoinAndSelect('Pessoas.telefonesIdFK' , 'ok')
        .getMany();


    return buscarPrmissoes
};
export {
    buscarPermissoesRtasUusariosRepository
}