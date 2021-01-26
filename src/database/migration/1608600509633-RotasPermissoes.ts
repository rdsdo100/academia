import {MigrationInterface, QueryRunner, Table} from "typeorm";

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

                ],
            }),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
