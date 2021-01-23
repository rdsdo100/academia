import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Telefones1608428745616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await  queryRunner.createTable( new Table({
            name: "telefones",
            columns:[{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true
            },
                {
                    name: "dd",
                    type: 'varchar',
                    length: '3'
                },
                {
                    name: "telefone",
                    type: 'varchar',
                    length: '90'
                }

            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
