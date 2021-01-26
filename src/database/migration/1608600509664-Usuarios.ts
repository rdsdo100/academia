import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Usuarios1608600509634 implements MigrationInterface {
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
                    {
                        name: 'ativo',
                        type: 'boolean',
                    },
                    {
                        name: 'pessoas_id_fk',
                        type: 'int',
                    },
                    {
                        name: 'tipos_usuarios_id_fk',
                        type: 'int',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'usuarios',
            new TableForeignKey({
                columnNames: ['pessoas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pessoas',
                name: 'usuarios_pessoas',
            }),
        );
        await queryRunner.createForeignKey(
            'usuarios',
            new TableForeignKey({
                columnNames: ['tipos_usuarios_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tipos_usuarios',
                name: 'usuario_tipos_usuarios',
            }),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
