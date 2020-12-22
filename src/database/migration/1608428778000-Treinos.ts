import {MigrationInterface, QueryRunner} from "typeorm";

export class Treinos1608428778000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
crEate table if not exists treinos (
                                      id   serial primary key,
                                      serie int,
                                      vezes int,
                                      kilos decimal,
                                      tempo integer,
                                      observacoes varchar,
                                      exercicios_id_fk integer,
                                      pessoas_id_fk integer,
                                      constraint treinos_exercicios foreign key (exercicios_id_fk) references exercicios(id),
                                      created_at timestamp default now() not null,
                                      updated_at timestamp default now() not null
);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
