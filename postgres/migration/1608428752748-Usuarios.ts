import {MigrationInterface, QueryRunner} from "typeorm";

export class Usuarios1608428752748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.query(`

            create table if not exists usuarios (
                                                    id serial not null primary key,
                                                    nome_usuario varchar(50) not null,
                                                    email varchar(90) not null unique,
                                                    senha varchar(30) not null,
                                                    matricula varchar(30) not null,
                                                    grupo_usuarios_id_fk integer,
                                                    pessoas_id_fk integer
                );

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
        alter table usuarios
    drop constraint if exists usuarios_grupo_usuarios_id_fk cascade;

        `)


        await  queryRunner.query(`
        drop table usuarios
        `)

    }

}