import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Pessoas1608428752738 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pessoas',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '50',
                    },
                    {
                        name: 'sobrenome',
                        type: 'varchar',
                        length: '50',
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        length: '11',
                    },
                    {
                        name: 'data_nacimento',
                        type: 'date',
                    },
                    {
                        name: 'data_cadastro',
                        type: 'date',
                    },
                    {
                        name: 'ativo',
                        type: 'boolean',
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
            'pessoas',
            new TableForeignKey({
                columnNames: ['enderecos_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'enderecos',
                name: 'pessoas_enderecos',
            }),
        );

        await queryRunner.createForeignKey(
            'pessoas',
            new TableForeignKey({
                columnNames: ['emails_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'emails',
                name: 'pessoas_emails',
            }),
        );

        await queryRunner.createForeignKey(
            'pessoas',
            new TableForeignKey({
                columnNames: ['telefones_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'telefones',
                name: 'pessoas_telefones',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}