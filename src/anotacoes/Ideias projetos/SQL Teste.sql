insert into enderecos (
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    ibge,
    numero) values
(
    '7546000',
    'Rua santa marta',
    'qd: 10 lt: 14',
    'São Pedro',
    'Neropolis',
    'GO',
    '000000',
    '000'
);

insert into emails (email) values
('rdsdo2011@gmail.com');

insert into telefones (
    dd,
    telefone) VALUES
('62',
 '991544066'
);

insert into academias (nome_fantazia,
                       nome_razao_social,
                       cpf_cnpj,
                       ativo,
                       bloqueado,
                       enderecos_id_fk,
                       emails_id_fk,
                       telefones_id_fk) values (
                                                   'teste',
                                                   'teste',
                                                   '1234567891011',
                                                   true ,
                                                   true,
                                                   1,
                                                   1,
                                                   1
                                               );

insert into enderecos (
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    ibge,
    numero) values
(
    '7546000',
    'Rua santa marta',
    'qd: 10 lt: 14',
    'São Pedro',
    'Neropolis',
    'GO',
    '000000',
    '000'
);

insert into emails (email) values
('rdsdo2011@gmail.com');

insert into telefones (
    dd,
    telefone) VALUES
('62',
 '991544066'
);

insert into pessoas (
    nome,
    sobrenome,
    cpf,
    data_nacimento,
    data_cadastro,
    enderecos_id_fk,
    emails_id_fk,
    telefones_id_fk) values
(
    'Rubens Diego',
    'Santana de oliveira',
    '00000000100',
    '1993-03-04',
    '2020-01-20',
    2,
    2,
    2
);

insert into tipos_usuarios (tipo_usuario) values ('administrador');

insert into usuarios (
    nome_usuario,
    email,
    senha,
    matricula,
    ativo,
    bloqueado,
    pessoas_id_fk,
    tipos_usuarios_id_fk,
    academias_id_fk) values
('root',
 'rdsdo2011@gmail.com',
 '123456',
 '1',
 true,
 true,
 1,
 1,
 1
);


insert into  rotas_permissoes (nome_rota, caminho_rota) VALUES
('Home','/home'),
('Cadastro Pessoas','/cadastro-pessoa'),
('Cadastro Academia','/cadastro-academia'),
('Cadastro Dietas','/cadastro-dieta');

insert into usuarios_rotas (usuarios_id_fk, rotas_permissoes_id_fk) values
(1,1),
(1,2),
(1,3),
(1,4);

insert into medidas (
    data_avaliacao,
    peso,
    estatura,
    torax_normal,
    torax_expandido,
    braco_direito_relaxado,
    braco_direito_expandido,
    braco_esquerdo_relaxado,
    braco_esquerdo_expandido,
    cintura,
    abdomem,
    quadril,
    coxa_medial_direira,
    coxa_medial_esquerda,
    panturrilia_direita,
    panturrilia_esquerda,
    observacoes)VALUES
(
    '2021-01-20',
    100,
    181,
    98,
    110,
    45,
    50,
    45,
    50,
    96,
    100,
    100,
    60,
    60,
    50,
    50,
    'Sem Obs.:'

);

insert into  medidas_usuarios (
    usuarios_id_fk,
    medidas_id_fk) values
(
    1,
    1
);

insert into exercicios (
    id,
    nome) values
(1,'Supino reto'),
(2,'Supino inclinado'),
(3,'Supino declinado'),
(4,'Pull over'),
(5,'Borboleta'),
(6,'Cross over'),
(7,'Puxada graviton'),
(8,'Puxada supinada'),
(9,'Remada no triângulo'),
(10,'Pull down no triângulo'),
(11,'Remada uni halter'),
(12,'Remada articulada'),
(13,'Leg press-10'),
(14,'Agachamento sumô'),
(15,'Extensora'),
(16,'Flexora deitado'),
(17,'Abdução'),
(18,'Adução'),
(19,'Hack'),
(20,'Panturrilha'),
(21,'Tríceps testa halter'),
(22,'Uni polia'),
(23,'Corda polia'),
(24,'Pulley polia'),
(25,'Testa polia'),
(26,'Inverso'),
(27,'Uni lateral com supinação'),
(28,'Rosca direta'),
(29,'Martelo'),
(30,'Barra w'),
(31,'Scoot'),
(32,'Inveso');

insert into treinos (nome) values ('Treino A'),
                                  ('Treino B'),
                                  ('Treino C'),
                                  ('Treino D'),
                                  ('Treino E');

insert into treinos_usuarios (usuarios_id_fk, treinos_id_fk) VALUES (1,1),
                                                                    (1,2),
                                                                    (1,3),
                                                                    (1,4),
                                                                    (1,5);

insert into series_exercicios (serie,
                               vezes,
                               kilos,
                               exercicios_id_fk,
                               treinos_id_fk) VALUES
(1,'15','10',1,1),
(2,'15','10',1,1),
(3,'15','10',1,1),
(1,'15','10',2,1),
(2,'15','10',2,1),
(3,'15','10',2,1),
(1,'15','10',3,1),
(2,'15','10',3,1),
(3,'15','10',3,1),
(1,'8','12',4,1),
(2,'8','12',4,1),
(3,'8','12',4,1),
(4,'8','12',5,1),
(1,'12','35',5,1),
(2,'12','35',5,1),
(3,'12','35',5,1),
(4,'12','35',6,1),
(1,'15','15 -15',6,1),
(2,'15','15 -15',6,1),
(3,'15','15 -15',6,1),
(1,'10','70',7,2),
(2,'10','70',7,2),
(3,'10','70',7,2),
(1,'15','40',8,2),
(2,'15','40',8,2),
(3,'15','40',8,2),
(1,'15','40',9,2),
(2,'15','40',9,2),
(3,'15','40',9,2),
(1,'15','35',10,2),
(2,'15','35',10,2),
(3,'15','35',10,2),
(1,'12','12',11,2),
(2,'12','12',11,2),
(3,'12','12',11,2),
(1,'20','15 - 15',12,2),
(2,'20','15 - 15',12,2),
(3,'20','15 - 15',12,2),
(1,'10 -  10 ','100',13,3),
(2,'10 -  10 ','100',13,3),
(3,'10 -  10 ','100',13,3),
(1,'15','16',14,3),
(2,'15','16',14,3),
(3,'15','16',14,3),
(1,'6,12, 20','60 - 40 - 20',15,3),
(2,'6,12, 20','60 - 40 - 20',15,3),
(3,'6,12, 20','60 - 40 - 20',15,3),
(1,'15','20',16,3),
(2,'15','20',16,3),
(3,'15','20',16,3),
(1,'20','45',17,3),
(2,'20','45',17,3),
(3,'20','45',17,3),
(1,'10','20',18,3),
(2,'10','20',18,3),
(3,'10','20',18,3),
(1,'12','15',19,3),
(2,'12','15',19,3),
(3,'12','15',19,3),
(1,'20','40',20,3),
(2,'20','40',20,3),
(3,'20','40',20,3),
(1,'15','30',21,4),
(2,'15','30',21,4),
(3,'15','30',21,4),
(4,'15','30',21,4),
(1,'12','15',22,4),
(2,'12','15',22,4),
(3,'12','15',22,4),
(1,'15','35',22,4),
(2,'15','35',23,4),
(3,'15','35',23,4),
(1,'15','45',24,4),
(2,'15','45',24,4),
(3,'15','45',25,4),
(1,'15','30',25,4),
(2,'15','30',25,4),
(3,'15','30',26,4),
(1,'10','30',26,4),
(2,'10','30',26,4),
(3,'10','30',27,4),
(1,'15','4',27,5),
(2,'15','4',27,5),
(3,'15','4',28,5),
(4,'15','4',28,5),
(1,'10','4',28,5),
(2,'10','4',28,5),
(3,'10','4',29,5),
(1,'12','4',29,5),
(2,'12','4',29,5),
(3,'12','4',29,5),
(4,'12','4',30,5),
(1,'10','10',30,5),
(2,'10','10',30,5),
(3,'10','10',30,5),
(1,'15','8',31,5),
(2,'15','8',31,5),
(3,'15','8',31,5),
(1,'15','3',32,5),
(2,'15','3',32,5),
(3,'15','3',32,5);