import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertsDefaults1608600509694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        insert into grupo_usuarios (id, nome ) VALUES
(1 , 'root'),
(2 , 'administrador'),
(3 , 'adm. Estoque');

        `)
        await queryRunner.query(`
        insert into usuarios (id ,nome_usuario, email, senha, matricula, grupo_usuarios_id_fk) values
        (1 , 'root' , 'root@root.com' , '123456' , '123' , 1);
        
        `)
        await queryRunner.query(`
            insert into  exercicios (id, nome) values
                                                   (1,'Agachamento livre 041B ag. Maq.'),
                                                   (2,'Agachamento hack'),
                                                   (3,'Agachamento Avançado 3B Ag. Maq'),
                                                   (4,'leg press 45º'),
                                                   (5,'extensão de perna'),
                                                   (6,'flexão de perna'),
                                                   (7,'adução'),
                                                   (8,'abdução'),
                                                   (9,'Extensão de quadril '),
                                                   (10,'Elevação ponta de pés'),
                                                   (11,'Elevação ponta de pés sentado'),
                                                   (12,'Rosca Direta'),
                                                   (13,'Rosca Alternada'),
                                                   (14,'Rosca scott'),
                                                   (15,'Rosca Concentrada'),
                                                   (16,'Rosca martelo'),
                                                   (17,'Tríceps no pulley'),
                                                   (18,'Tríceps Deitado '),
                                                   (19,'Tríceps individual'),
                                                   (20,'Tríceps na pulley alto'),
                                                   (21,'Puxada no pulley'),
                                                   (22,'BR. Cavalo'),
                                                   (23,'Remada no pilley sentado'),
                                                   (24,'Desenvolvimento'),
                                                   (25,'Levantadas lateral'),
                                                   (26,'Levantada frontal'),
                                                   (27,'Grande Remada'),
                                                   (28,'Supino'),
                                                   (29,'Supino sentado'),
                                                   (30,'Supino inclinado'),
                                                   (31,'Supino Declinado'),
                                                   (32,'Crucifixo'),
                                                   (33,'Borboleta'),
                                                   (34,'Puxada por traz na borboleta'),
                                                   (35,'Pullover'),
                                                   (36,'Rosca inversa'),
                                                   (37,'Flexão e 35- extensão de pulso'),
                                                   (38,'Remada unilateral'),
                                                   (39,'Paralela abdominal'),
                                                   (40,'Abdominal'),
                                                   (41,'Abdominal inverso'),
                                                   (42,'esteira'),
                                                   (43,'bicicleta'),
                                                   (44,'elíptico'),
                                                   (45,'Gráviton'),
                                                   (46,'CroosOver');
                                                   `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}