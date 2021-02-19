import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class RotasPermissoes1608600509633 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rotas_permissoes',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome_rota',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                        isUnique: true,
                    },
                    {
                        name: 'caminho_rota',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                        isUnique: true,
                    },
                    {
                        name: 'rotas_principais_id_fk',
                        type: 'int',
                    },
                ],
            }),
        );
        await queryRunner.createForeignKey(
            'rotas_permissoes',
            new TableForeignKey({
                columnNames: ['rotas_principais_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'rotas_principais',
                name: 'rotas_permissoes_rotas_principais',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
