import {createQueryBuilder, getConnection} from "typeorm";

import {UsuariosRotas} from "../entity/UsuariosRotas";
import {RotasPermissoes} from "../entity/RotasPermissoes";
import {Usuarios} from "../entity/Usuarios";

const buscarPermissoesRtasUusariosRepository = async () => {

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        /*const buscarPrmissoes = await queryRunner.manager.getRepository(UsuariosRotas)
            .createQueryBuilder('ur' )
            .innerJoinAndSelect(Usuarios , 'u' , 'u.id = ur.usuarios_id_fk')
            .innerJoinAndSelect(RotasPermissoes , 'rp' , 'rp.id = ur.rotas_permissoes_id_fk' )
            .getMany()*/

        const ok = new UsuariosRotas()
        const buscarPrmissoes = await createQueryBuilder(UsuariosRotas)
            .leftJoinAndSelect('UsuariosRotas.usuariosIdFK' ,' Usuarios ')


        console.log(buscarPrmissoes)


   /*     select * from usuarios_rotas as ur
        left join usuarios u on u.id = ur.usuarios_id_fk
        left join rotas_permissoes rp on rp.id = ur.rotas_permissoes_id_fk
        where ur.usuarios_id_fk = 1*/

/*
    select u.nome_usuario , rp.nome_rota , rp.caminho_rota from usuarios_rotas as ur
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
};
export {
    buscarPermissoesRtasUusariosRepository
}