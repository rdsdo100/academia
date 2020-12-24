import {MigrationInterface, QueryRunner} from "typeorm";

export class Emails1608428737055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create  table if not exists emails (
                                                   id serial primary key,
                                                   email varchar(150),
                                                   created_at timestamp default now() not null,
                                                   updated_at timestamp default now() not null
                                                 
            );
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
