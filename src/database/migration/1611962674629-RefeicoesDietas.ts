import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class RefeicoesDietas1611962674629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name: 'refeicoes_dietas',
                    columns: [
                        {
                            name: 'id',
                            type: 'int',
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: 'opcoes',
                            type: 'varchar',
                            length: '100'
                        },
                        {
                            name: 'descricoes_refeicoes',
                            type: 'varchar',
                            length: '500'
                        },
                        {
                            name: 'ativo',
                            type: 'boolean'
                        },
                        {
                            name: 'data_criacao',
                            type: 'date'
                        },
                        {
                            name: 'dietas_id_fk',
                            type: 'int',
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
