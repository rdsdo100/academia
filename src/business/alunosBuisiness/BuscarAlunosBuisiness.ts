import {buscarAlunoRepository} from "../../repository/PessoasRepository";

export default  class BuscarAlunosBuisiness {



    async index (){
        const  pessoas = await buscarAlunoRepository()
        return pessoas
    }


}