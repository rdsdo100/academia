import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Academia1600782688800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new  Table({
            name: 'academia',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'nome_fantazia',
                    type: 'varchar',
                    length: '60'
                },
                {
                    name: 'nome_razao_social',
                    type: 'varchar',
                    length: '60'
                },
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
