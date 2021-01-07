import {MigrationInterface, QueryRunner} from "typeorm";

export class MedidasAlunos1608661270898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table medidas_alunos (
                                id serial primary key ,
                                alunos_id_fk integer,
                                medidas_id_fk integer,
                                constraint treinos_alunos_alunos foreign key (alunos_id_fk) references alunos(id),
                                constraint treinos_alunos_medias foreign key (medidas_id_fk) references medidas (id)
);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
