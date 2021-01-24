import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class MedidasAlunos1608661270898 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medidas_alunos',
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
                        name: 'medidas_id_fk',
                        type: 'int',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'medidas_alunos',
            new TableForeignKey({
                columnNames: ['alunos_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'alunos',
                name: 'treinos_alunos_aluno',
            }),
        );

        await queryRunner.createForeignKey(
            'medidas_alunos',
            new TableForeignKey({
                columnNames: ['medidas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medidas',
                name: 'treinos_alunos_medias',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
