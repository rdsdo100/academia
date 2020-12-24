import {MigrationInterface, QueryRunner} from "typeorm";

export class Pessoas1608428752738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.query(`
create table if not exists pessoas (
                          id            serial primary key,
                          nome          varchar(80) not null,
                          sobrenome     varchar(90) not null,
                          cpf           varchar(11) unique,
                          data_nacimento date not null,
                          data_cadastro  date not null,
                          ativo         boolean,
                          enderecos_id_fk integer,
                          emails_id_fk integer,
                          telefones_id_fk integer,
                          constraint pessoas_enderecos foreign key (enderecos_id_fk) references enderecos(id),
                          constraint pessoas_emails foreign key (emails_id_fk) references emails(id),
                          constraint pessoas_telefones foreign key (telefones_id_fk) references telefones(id),
                          created_at timestamp default now() not null,
                          updated_at timestamp default now() not null
                          

);
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
