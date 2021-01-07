import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertsDefaults1608600509694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.query(`
        insert into usuarios (id ,nome_usuario, email, senha, matricula) values
        (1 , 'root' , 'root@root.com' , '123456' , '123' );
        
        `)
        /*await queryRunner.query(`
            insert into  exercicioss (nome) values
                                                ('Agachamento livre 041B ag. Maq.'),
                                                ('Agachamento hack'),
                                                ('Agachamento Avançado 3B Ag. Maq'),
                                                ('leg press 45º'),
                                                ('extensão de perna'),
                                                ('flexão de perna'),
                                                ('adução'),
                                                ('abdução'),
                                                ('Extensão de quadril '),
                                                ('Elevação ponta de pés'),
                                                ('Elevação ponta de pés sentado'),
                                                ('Rosca Direta'),
                                                ('Rosca Alternada'),
                                                ('Rosca scott'),
                                                ('Rosca Concentrada'),
                                                ('Rosca martelo'),
                                                ('Tríceps no pulley'),
                                                ('Tríceps Deitado '),
                                                ('Tríceps individual'),
                                                ('Tríceps na pulley alto'),
                                                ('Puxada no pulley'),
                                                ('BR. Cavalo'),
                                                ('Remada no pilley sentado'),
                                                ('Desenvolvimento'),
                                                ('Levantadas lateral'),
                                                ('Levantada frontal'),
                                                ('Grande Remada'),
                                                ('Supino'),
                                                ('Supino sentado'),
                                                ('Supino inclinado'),
                                                ('Supino Declinado'),
                                                ('Crucifixo'),
                                                ('Borboleta'),
                                                ('Puxada por traz na borboleta'),
                                                ('Pullover'),
                                                ('Rosca inversa'),
                                                ('Flexão e 35- extensão de pulso'),
                                                ('Remada unilateral'),
                                                ('Paralela abdominal'),
                                                ('Abdominal'),
                                                ('Abdominal inverso'),
                                                ('esteira'),
                                                ('bicicleta'),
                                                ('elíptico'),
                                                ('Gráviton'),
                                                ('CroosOver');

        `)*/

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}