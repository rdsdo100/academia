import {MigrationInterface, QueryRunner} from "typeorm";

export class Exercicios1608428769369 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
create table if not exists exercicios (
                                          id   serial primary key,
                                          nome varchar(50) not null,
                                          exercicio_url_image varchar(500)
);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
