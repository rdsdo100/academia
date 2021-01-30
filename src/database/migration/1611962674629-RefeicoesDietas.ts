import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

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
                        },
                        {
                            name: 'tipos_refeicoes_id_fk',
                            type: 'int',
                        }
                    ]
                }
            )
        );
        await queryRunner.createForeignKey(
            'refeicoes_dietas',
            new TableForeignKey({
                columnNames: ['dietas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'dietas',
                name: 'refeicoes_dietas_dietas',
            }),
        );
        await queryRunner.createForeignKey(
            'refeicoes_dietas',
            new TableForeignKey({
                columnNames: ['tipos_refeicoes_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tipos_refeicoes',
                name: 'refeicoes_dietas_tipos_refeicoes_id_fk',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
