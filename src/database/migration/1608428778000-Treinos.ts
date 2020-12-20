import {MigrationInterface, QueryRunner} from "typeorm";

export class Treinos1608428778000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
crEate table if not exists treino (
                                      id   serial primary key,
                                      sere int,
                                      vezes int,
                                      kilos decimal,
                                      tempo integer,
                                      observacoes varchar,
                                      exercicios_id_fk integer,
                                      pessoas_id_fk integer,
                                      constraint treinos_exercicios foreign key (exercicios_id_fk) references exercicios(id),
                                      constraint treinos_pessoas foreign key (pessoas_id_fk) references pessoas(id)
);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
