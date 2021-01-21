import {MigrationInterface, QueryRunner} from "typeorm";

export class SeriesExercicios1608428778080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists series_exercicios (
                                                              id   serial primary key,
                                                              serie int,
                                                              vezes int,
                                                              kilos decimal,
                                                              tempo integer,
                                                              interbalo integer,
                                                              exercicios_id_fk integer,
                                                              treinos_id_fk integer,
                                                              constraint series_treinos_exercicios foreign key (exercicios_id_fk) references exercicios(id),
                                                              constraint series_treinos_treinos foreign key (treinos_id_fk) references treinos(id)
                                                              

                );
        `)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
