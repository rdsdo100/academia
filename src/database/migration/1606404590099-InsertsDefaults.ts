import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertsDefaults1606404590099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        insert into grupo_usuarios (id, nome ) VALUES
(1 , 'root'),
(2 , 'administrador'),
(3 , 'adm. Estoque');

        `)
        await queryRunner.query(`
        insert into usuarios (id ,nome_usuario, email, senha, matricula, grupo_usuarios_id_fk) values
        (1 , 'root' , 'root@root.com' , '123456' , '123' , 1);
        
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}