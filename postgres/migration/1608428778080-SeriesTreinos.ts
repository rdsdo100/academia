import {MigrationInterface, QueryRunner} from "typeorm";

export class SeriesTreinos1608428778080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
            create table if not exists series_treinos (
                                                              id   serial primary key,
                                                              serie int,
                                                              vezes int,
                                                              kilos decimal,
                                                              tempo integer,
                                                              interbalo integer

                );
        `)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
