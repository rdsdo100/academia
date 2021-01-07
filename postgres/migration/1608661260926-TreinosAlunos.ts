import {MigrationInterface, QueryRunner} from "typeorm";

export class TreinosAlunos1608661260926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table treinos_alunos (
                                id serial primary key ,
                                alunos_id_fk integer,
                                treinos_id_fk integer,
                                constraint treinos_alunos_alunos foreign key (alunos_id_fk) references alunos(id),
                                constraint treinos_alunos_treinos foreign key (treinos_id_fk) references treinos(id)
                                
);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
