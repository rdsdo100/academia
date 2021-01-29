import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UsuariosDietas1611962690754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name: 'usuarios_dietas',
                    columns: [
                        {
                            name: 'id',
                            type: 'int',
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: 'usuario_id_fk',
                            type: 'int',
                        },
                        {
                            name: 'dietas_id_fk',
                            type: 'int',
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
