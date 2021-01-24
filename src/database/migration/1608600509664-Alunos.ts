import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Alunos1608600509664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new  Table({
            name: 'alunos',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'pessoas_id_fk',
                    type: 'int'
                }
            ]
        }))

        await queryRunner.createForeignKey("alunos", new TableForeignKey({
            columnNames: ["pessoas_id_fk"],
            referencedColumnNames: ["id"],
            referencedTableName: "pessoas",
            name: 'alunos_pessoas'
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
