import {MigrationInterface, QueryRunner} from "typeorm";

export class Treinos1608428778000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists treinos (
                                                   id   serial primary key,
                                                   nome varchar(50),
                observacoes varchar,
                exercicios_treinos_id_fk integer,
                constraint treinos_exercicios_treinos foreign key (exercicios_treinos_id_fk) references exercicios_treinos(id)

                );
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
