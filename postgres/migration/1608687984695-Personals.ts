import {MigrationInterface, QueryRunner} from "typeorm";

export class Personals1608687984695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.query(`
            create table if not exists personals (
                id            serial primary key,
                pessoas_id_fk integer,
                constraint personal_pessoas foreign key (pessoas_id_fk) references pessoas(id)
            );
  `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
