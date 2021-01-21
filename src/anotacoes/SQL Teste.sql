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
    ativo,
    enderecos_id_fk,
    emails_id_fk,
    telefones_id_fk) values
(
    'Rubens Diego',
    'Santana de oliveira',
    '00000000000',
    '1993-03-04',
    '2020-01-20',
    true,
    1,
    1,
    1
);

insert into alunos (pessoas_id_fk) values (1);

insert into medidas (
    data_avaliacao,
    peso,
    estatura,
    torax_normal,
    torax_expandido,
    braco_direito_relaxado,
    braco_direito_expandido,
    braco_direito_relaxado,
    braco_direito_expandido,
    cintura,
    abdomem,
    quadril,
    coxa_medial_direira,
    coxa_medial_esquerda,
    panturrilia_direita,
    panturrilia_esquerda,
    observacoes) VALUES
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

insert into  medidas_alunos (
    alunos_id_fk,
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
