const  db  = require ('../config/bancoDados/db')

module.exports.get = (req , res) =>{

/*    db('pessoa').where('id' ,'<' ,10).then(t=>{
        console.log(t)
        res.status(200).send(t)
    })*/

let test = 6542;

    db.select('*')
        .from('pessoa')
        .innerJoin('endereco' , 'pessoa.id' , '=' ,'endereco.pessoa_id_pk')
        .innerJoin('telefone' , 'pessoa.id' , '=' ,'telefone.pessoa_id_pk' )
        .innerJoin('email' , 'pessoa.id' , '=' ,'email.pessoa_id_pk' )
        .where('pessoa.id' , test)
        .first()
        .then(t=> {



            res.status(200).send(t)
        })

}
