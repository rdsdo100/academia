import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class UsuarioRotas1608600509666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios_rotas',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'usuarios_id_fk',
                        type: 'int',
                    },
                    {
                        name: 'rotas_permissoes_id_fk',
                        type: 'int',
                    },

                ],
            }),
        );

        await queryRunner.createForeignKey('usuarios_rotas' , new TableForeignKey({
            columnNames: ['usuarios_id_fk'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuarios',
            name: 'usuarios_rotas_usuarios',
        }));
        await queryRunner.createForeignKey('usuarios_rotas' , new TableForeignKey({
            columnNames: ['rotas_permissoes_id_fk'],
            referencedColumnNames: ['id'],
            referencedTableName: 'rotas_permissoes',
            name: 'usuarios_rotas_rotas_permissoes',
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
