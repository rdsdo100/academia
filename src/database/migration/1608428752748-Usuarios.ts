import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usuarios1608428752748 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome_usuario',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                        isUnique: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '90',
                        isNullable: true,
                        isUnique: true,
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'matricula',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table usuarios
            drop constraint if exists usuarios_grupo_usuarios_id_fk cascade;

        `);

        await queryRunner.query(`
        drop table usuarios
        `);
    }
}
