import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class MedidasUsuarios1608661270898 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medidas_usuarios',
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
                        name: 'medidas_id_fk',
                        type: 'int',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'medidas_usuarios',
            new TableForeignKey({
                columnNames: ['usuarios_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                name: 'treinos_usuarios_usuarios',
            }),
        );

        await queryRunner.createForeignKey(
            'medidas_usuarios',
            new TableForeignKey({
                columnNames: ['medidas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medidas',
                name: 'treinos_usuarios_medias',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
