import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class TreinosAlunos1608661260926 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'treinos_alunos',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'alunos_id_fk',
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
            'treinos_alunos',
            new TableForeignKey({
                columnNames: ['alunos_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'alunos',
                name: 'treinos_alunos_alunos',
            }),
        );

        await queryRunner.createForeignKey(
            'treinos_alunos',
            new TableForeignKey({
                columnNames: ['treinos_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'treinos',
                name: 'treinos_alunos_treinos',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
