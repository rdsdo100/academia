import {MigrationInterface, QueryRunner} from "typeorm";

export class Personal1608687984695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.query(`
            create table if not exists personal (
                id            serial primary key
            );
  `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
