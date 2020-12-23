import {buscarAlunoRepository, cadastrarAlunos} from "../../repository/alunosRepository";
import {Pessoas} from "../../entity/Pessoas";
import {Enderecos} from "../../entity/Enderecos";
import {Emails} from "../../entity/Emails";
import {Telefones} from "../../entity/Telefones";



export default  class AlunosBuisiness {



    async index (){
        const  alunos = await buscarAlunoRepository()
        return alunos
    }

    async cadastrarAlunos (pessoas: Pessoas ,
                           enderecos: Enderecos ,
                           emails: Emails ,
                           telefones: Telefones){

        const alunos = await cadastrarAlunos(pessoas, enderecos , emails, telefones)

        return alunos
    }


}