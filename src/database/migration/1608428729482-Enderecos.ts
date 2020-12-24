import {MigrationInterface, QueryRunner} from "typeorm";

export class Enderecos1608428729482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.query(`


            create  table if not exists enderecos (
                                                      id serial primary key,
                                                      cep varchar,
                                                      logradouro varchar,
                                                      complemento varchar,
                                                      bairro varchar,
                                                      localidade varchar,
                                                      uf varchar,
                                                      ibge varchar,
                                                      numero varchar,
                                                      created_at timestamp default now() not null,
                                                      updated_at timestamp default now() not null
                                                      
            );

        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
