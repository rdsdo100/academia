import {MigrationInterface, QueryRunner} from "typeorm";

export class ExerciciosTreinos1608428778090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists exercicios_treinos (
                                                              id   serial primary key,
                                                              serie int,
                                                              vezes int,
                                                              kilos decimal,
                                                              tempo integer,
                                                              observacoes varchar,
                                                              exercicios_id_fk integer,
                                                             treinos_id_fk integer,
                                                              constraint exercicios_treinos_exercicios foreign key (exercicios_id_fk) references exercicios(id),
                                                              constraint treinos_exercicios_treinos foreign key (treinos_id_fk) references treinos(id)

                );
        `)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
