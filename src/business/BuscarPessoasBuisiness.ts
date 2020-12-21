import {buscarPessoasRepository} from "../repository/PessoasRepository";

export default  class BuscarPessoasBuisiness{



    async index (){
        const  pessoas = await buscarPessoasRepository()
        return pessoas
    }


}