import {getConnection} from "typeorm";

import {UsuariosRotas} from "../entity/UsuariosRotas";
import {RotasPermissoes} from "../entity/RotasPermissoes";

const buscarPermissoesRtasUusariosRepository = async () => {

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const buscarPrmissoes = await queryRunner.manager
            .getRepository(UsuariosRotas)
            .createQueryBuilder('usuarios_rotas')



        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }
};
export {
    buscarPermissoesRtasUusariosRepository
}