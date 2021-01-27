import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class Academias1600782688800 implements MigrationInterface {
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
                        name: 'email',
                        type: 'varchar',
                        length: '150',
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                        length: '8',
                    },
                    {
                        name: 'logradouro',
                        type: 'varchar',
                        length: '90',
                    },
                    {
                        name: 'complemento',
                        type: 'varchar',
                        length: '90',
                    },
                    {
                        name: 'bairro',
                        type: 'varchar',
                        length: '40',
                    },
                    {
                        name: 'localidade',
                        type: 'varchar',
                        length: '20',
                    },
                    {
                        name: 'uf',
                        type: 'varchar',
                        length: '2',
                    },
                    {
                        name: 'ibge',
                        type: 'varchar',
                        length: '6',
                    },
                    {
                        name: 'numero',
                        type: 'varchar',
                        length: '5',
                    },
                    {
                        name: 'dd',
                        type: 'varchar',
                        length: '3',
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                        length: '90',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
