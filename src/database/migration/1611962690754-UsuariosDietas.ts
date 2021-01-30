import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

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
        await queryRunner.createForeignKey(
            'usuarios_dietas',
            new TableForeignKey({
                columnNames: ['usuario_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                name: 'usuarios_dietas_usuarios',
            }),
        );
        await queryRunner.createForeignKey(
            'usuarios_dietas',
            new TableForeignKey({
                columnNames: ['dietas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'dietas',
                name: 'usuarios_dietas__dietas',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
