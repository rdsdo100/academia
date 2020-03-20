const  db  = require ('../config/bancoDados/db')

module.exports.get = (req , res) =>{


    

let test = 1000;

    db.select('*')
        .from('pessoa')
        .innerJoin('endereco' , 'pessoa.id' , '=' ,'endereco.pessoa_id_pk')
        .innerJoin('telefone' , 'pessoa.id' , '=' ,'telefone.pessoa_id_pk' )
        .innerJoin('email' , 'pessoa.id' , '=' ,'email.pessoa_id_pk' )
        .where('pessoa.id' , test)
        .first()
        .then(t=> {

const aluno = new Object()
            aluno.aluno = {
                id: t.id,
                    nome: t.nome ,
                    sobrenome: t.sobrenome ,
                    cpf: t.cpf ,
                    dataNacimento: t. data_nacimento ,
                    dataCadastro: t.data_cadastro ,
                    ativo: t.ativo
            }
            aluno.endereco = {
                cep : t.cep,
                logradouro : t.logradouro,
                complemento : t.complemento,
                bairro : t.bairro,
                localidade: t.localidade,
                uf: t.uf,
                ibge : t.ibge,
                numero: t.numero
            }
            aluno.telefone = {
                dd: t.dd,
                telefone: t.telefone,
            }
            aluno.Email = {
                email: t.email
            }
            res.status(200).send(aluno)
        })

}
