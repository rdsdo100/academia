const  db  = require ('../config/bancoDados/db')
const alunoTeste = require ('../models/alunoModel')
const Aluno = require('../models/mongoose/Aluno')

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



    const alunoId = await db.select('*')
        .from('pessoa')
        .innerJoin('endereco' , 'pessoa.id' , '=' ,'endereco.pessoa_id_pk')
        .innerJoin('telefone' , 'pessoa.id' , '=' ,'telefone.pessoa_id_pk' )
        .innerJoin('email' , 'pessoa.id' , '=' ,'email.pessoa_id_pk' )
        .where('pessoa.id' , id).first()




    res.status(200).send(alunoTeste)

}

module.exports.post = async (req ,res) =>{
const {nome , sobrenome} = req.body
let ok = await Aluno.create({
    nome ,
    sobrenome
})


    res.status(200).json(ok)


}