import {MigrationInterface, QueryRunner} from "typeorm";

export class Treinos1608428778000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists treinos (
                                                   id   serial primary key,
                                                   nome varchar(50),
                                                 observacoes varchar
                                                    

                );
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
