import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from 'typeorm';

export class Academias1608428752720 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'academias',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome_fantazia',
                        type: 'varchar',
                        length: '60',
                    },
                    {
                        name: 'nome_razao_social',
                        type: 'varchar',
                        length: '60',
                    },
                    {
                        name: 'enderecos_id_fk',
                        type: 'int',
                    },
                    {
                        name: 'emails_id_fk',
                        type: 'int',
                    },
                    {
                        name: 'telefones_id_fk',
                        type: 'int',
                    },

                ],
            }),
        );
        await queryRunner.createForeignKey(
            'academias',
            new TableForeignKey({
                columnNames: ['enderecos_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'enderecos',
                name: 'academias_enderecos',
            }),
        );

        await queryRunner.createForeignKey(
            'academias',
            new TableForeignKey({
                columnNames: ['emails_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'emails',
                name: 'academias_emails',
            }),
        );

        await queryRunner.createForeignKey(
            'academias',
            new TableForeignKey({
                columnNames: ['telefones_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'telefones',
                name: 'academias_telefones',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
