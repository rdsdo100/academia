import {MigrationInterface, QueryRunner} from "typeorm";

export class ExerciciosTreinos1608428778090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists exercicios_treinos (
                                                              id   serial primary key,
                                                              observacoes varchar,
                                                              exercicios_id_fk integer,
                                                              treinos_id_fk integer,
                                                              series_treinos_id_fk integer,
                                                              constraint exercicios_treinos_exercicios foreign key (exercicios_id_fk) references exercicios(id),
                                                              constraint exercicios_treinos_treinos foreign key (treinos_id_fk) references treinos(id),
                                                              constraint exercicios_treinos_exercicios_treinos foreign key (series_treinos_id_fk) references series_treinos(id)


                );
       
        `)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
