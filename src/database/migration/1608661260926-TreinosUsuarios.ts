import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class TreinosUsuarios1608661260926 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'treinos_usuarios',
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
                        name: 'treinos_id_fk',
                        type: 'int',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'treinos_usuarios',
            new TableForeignKey({
                columnNames: ['usuarios_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                name: 'treinos_usuarios_usuario',
            }),
        );

        await queryRunner.createForeignKey(
            'treinos_usuarios',
            new TableForeignKey({
                columnNames: ['treinos_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'treinos',
                name: 'treinos_usuarios_treinos',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
