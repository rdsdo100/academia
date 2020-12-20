import {MigrationInterface, QueryRunner} from "typeorm";

export class Exercicios1608428769369 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
create table if not exists exercicios (
                                          id   serial primary key,
                                          nome varchar
);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
