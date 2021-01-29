import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TiposRefeicoes1611962644989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name: 'tipos_refeicoes',
                    columns: [
                        {
                            name: 'id',
                            type: 'int',
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: 'nome_refeicao',
                            type: 'varchar',
                            length: '90'
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
