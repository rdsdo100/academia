import {MigrationInterface, QueryRunner} from "typeorm";

export class Alunos1608600509664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await  queryRunner.query(`
            create table alunos (
                                    id serial primary key ,
                                    pessoas_id_fk integer,
                                    treinos_id_fk integer,
                                    medias_id_fk integer,
                                    constraint alunos_pessoas foreign key (pessoas_id_fk) references pessoas(id),
                                    created_at timestamp default now() not null,
                                    updated_at timestamp default now() not null
            );

        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
