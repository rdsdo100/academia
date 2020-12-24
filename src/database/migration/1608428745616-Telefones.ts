import {MigrationInterface, QueryRunner} from "typeorm";

export class Telefones1608428745616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
create table if not exists telefones (
                            id serial primary key,
                            dd varchar(3),
                            telefone varchar(10) not null                    
);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
