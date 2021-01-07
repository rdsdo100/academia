import {MigrationInterface, QueryRunner} from "typeorm";

export class Academia1600782688800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists academia (
                id            serial primary key
            );
  `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
