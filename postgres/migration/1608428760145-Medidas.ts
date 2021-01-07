import {MigrationInterface, QueryRunner} from "typeorm";

export class Medidas1608428760145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
create table if not exists medidas (
                                       id   serial primary key,
                                       data_avaliacao date,
                                       peso decimal,
                                       estatura decimal,
                                       torax_normal decimal,
                                       torax_expandido decimal,
                                       braco_direito_relaxado decimal,
                                       braco_direito_expandido decimal,
                                       cintura decimal,
                                       abdomem decimal,
                                       quadril decimal,
                                       coxa_medial_direira decimal,
                                       coxa_medial_esquerda decimal,
                                       panturrilia_direita decimal,
                                       panturrilia_esquerda decimal,
                                       observacoes varchar                                       
                                       
);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}