import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class SeriesExercicios1608428778080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new  Table({
            name: 'series_exercicios',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'serie',
                    type: 'int',
                    isNullable:true

                },
                {
                    name: 'vezes',
                    type: 'varchar',
                    length: '30',
                    isNullable:true
                },
                {
                    name: 'kilos',
                    type: 'varchar',
                    length: '30',
                    isNullable:true
                },
                {
                    name: 'tempo',
                    type: 'int',
                    isNullable:true
                },
                {
                    name: 'intervalo',
                    type: 'int',
                    isNullable:true
                },
                {
                    name: 'exercicios_id_fk',
                    type: 'int',
                    isNullable:true
                },
                {
                    name: 'treinos_id_fk',
                    type: 'int',
                    isNullable:true
                }
            ]
        }));

        await queryRunner.createForeignKey("series_exercicios", new TableForeignKey({
            columnNames: ["exercicios_id_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "exercicios",
            name: 'series_treinos_exercicios'
        }));

        await queryRunner.createForeignKey("series_exercicios", new TableForeignKey({
            columnNames: ["treinos_id_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "treinos",
            name: 'series_treinos_treinos'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
