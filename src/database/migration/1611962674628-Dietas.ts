import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Dietas1611962674628 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dietas',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome_dieta',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'ativo',
                        type: 'boolean',
                    },
                    {
                        name: 'data_criacao',
                        type: 'date',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
