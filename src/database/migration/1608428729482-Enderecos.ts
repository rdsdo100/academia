import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Enderecos1608428729482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.createTable( new Table({
                name: "enderecos",
                columns:[{
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                    {
                        name: "cep",
                        type: 'varchar',
                        length: '8'
                    },
                    {
                        name: "logradouro",
                        type: 'varchar',
                        length: '90'
                    },
                    {
                        name: "complemento",
                        type: 'varchar',
                        length: '90'
                    },
                    {
                        name: "bairro",
                        type: 'varchar',
                        length: '40'
                    },
                    {
                        name: "localidade",
                        type: 'varchar',
                        length: '20'
                    }, {
                        name: "uf",
                        type: 'varchar',
                        length: '2'
                    },
                    {
                        name: "ibge",
                        type: 'varchar',
                        length: '6'
                    },
                    {
                        name: "numero",
                        type: 'varchar',
                        length: '5'
                    },

                ]
            })
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
