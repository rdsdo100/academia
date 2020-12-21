import {getManager} from "typeorm";
import {Pessoas} from "../entity/Pessoas";
import {Exercicios} from "../entity/Exercicios";

const buscarPessoasRepository = async ()=>{
    const usuarioRepository = getManager()
    return usuarioRepository.find(Pessoas)
}

export {
    buscarPessoasRepository
}