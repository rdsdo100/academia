import {createQueryBuilder, getConnection} from "typeorm";

import {UsuariosRotas} from "../entity/UsuariosRotas";
import {RotasPermissoes} from "../entity/RotasPermissoes";
import {Usuarios} from "../entity/Usuarios";


const buscarPermissoesRtasUusariosRepository = async () => {

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let buscarPrmissoes

    try {

const ok = new UsuariosRotas()


         buscarPrmissoes = await createQueryBuilder('ur')
            .innerJoinAndSelect(Usuarios ,'u' , "u.id = ur.usuarios_id_fk")

            .getMany()


        /*const user = await createQueryBuilder("user")
            .leftJoinAndSelect(Photo, "photo", "photo.userId = user.id")
            .getMany();
*/

   /*     select * from usuarios_rotas as ur
        left join usuarios u on u.id = ur.usuarios_id_fk
        left join rotas_permissoes rp on rp.id = ur.rotas_permissoes_id_fk
        where ur.usuarios_id_fk = 1*/

/*
    select * from usuarios_rotas as ur
    left join usuarios u on u.id = ur.usuarios_id_fk
    left join rotas_permissoes rp on rp.id = ur.rotas_permissoes_id_fk
    where ur.usuarios_id_fk = 1
*/

        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return buscarPrmissoes
};
export {
    buscarPermissoesRtasUusariosRepository
}