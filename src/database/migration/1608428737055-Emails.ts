import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Emails1608428737055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await  queryRunner.createTable( new Table({
            name: "emails",
            columns:[{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
                {
                    name: "email",
                    type: 'varchar',
                    length: '150'
                }

            ]
        }))


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
