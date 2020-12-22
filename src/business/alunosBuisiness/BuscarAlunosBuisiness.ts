import {buscarAlunoRepository} from "../../repository/AlunosRepository";

export default  class BuscarAlunosBuisiness {



    async index (){
        const  pessoas = await buscarAlunoRepository()
        return pessoas
    }

    async cadastrarAlunos (){

    }


}