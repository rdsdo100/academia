import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Exercicios1608428769369 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'exercicios',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '50',
                    },
                    {
                        name: 'exercicio_url_image',
                        type: 'varchar',
                        length: '500',
                        isNullable: true,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
