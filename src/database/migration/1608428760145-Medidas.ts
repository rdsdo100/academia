import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Medidas1608428760145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
                name: 'medidas',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy: 'increment'
                    },

                    {
                        name:"data_avaliacao",
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'peso',
                        type: 'decimal',
                        isNullable: true
                    },
                    {
                        name: "estatura",
                        type: "decimal"
                    },
                    {
                        name: "torax_normal",
                        type: "decimal"
                    },
                    {
                        name: "torax_expandido",
                        type: "decimal"
                    },
                    {
                        name: "braco_direito_relaxado",
                        type: "decimal"
                    },
                    {
                        name: "braco_direito_expandido",
                        type: "decimal"
                    },
                    {
                        name: "braco_esquerdo_relaxado",
                        type: "decimal"
                    },
                    {
                        name: "braco_esquerdo_expandido",
                        type: "decimal"
                    },
                    {
                        name: "cintura",
                        type: "decimal"
                    },
                    {
                        name: "abdomem",
                        type: "decimal"
                    },
                    {
                        name: "quadril",
                        type: "decimal"
                    },
                    {
                        name: "coxa_medial_direira",
                        type: "decimal"
                    },
                    {
                        name: "coxa_medial_esquerda",
                        type: "decimal"
                    },
                    {
                        name: "panturrilia_direita",
                        type: "decimal"
                    },
                    {
                        name: "panturrilia_esquerda",
                        type: "decimal"
                    },
                    {
                        name: 'observacoes',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
