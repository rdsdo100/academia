const  db  = require ('../config/bancoDados/db')

module.exports.get = async (req , res) =>{


    

let test = 700;

   const alunos = await db.select('*')
        .from('pessoa')
        .innerJoin('endereco' , 'pessoa.id' , '=' ,'endereco.pessoa_id_pk')
        .innerJoin('telefone' , 'pessoa.id' , '=' ,'telefone.pessoa_id_pk' )
        .innerJoin('email' , 'pessoa.id' , '=' ,'email.pessoa_id_pk' )

    res.status(200).send(alunos)


}


module.exports.getId = async (req , res) =>{

    let test = req.params.id;

    const t = await db.select('*')
        .from('pessoa')
        .innerJoin('endereco' , 'pessoa.id' , '=' ,'endereco.pessoa_id_pk')
        .innerJoin('telefone' , 'pessoa.id' , '=' ,'telefone.pessoa_id_pk' )
        .innerJoin('email' , 'pessoa.id' , '=' ,'email.pessoa_id_pk' )
        .where('pessoa.id' , test).first()

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
console.log("pesquisa: " + test)
    res.status(200).send(aluno)


}