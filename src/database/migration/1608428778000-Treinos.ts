import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Treinos1608428778000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new  Table({
            name: 'treinos',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '50'
                },
                {
                    name: 'observacoes',
                    type: 'varchar',
                    length: '500',
                    isNullable: true
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
