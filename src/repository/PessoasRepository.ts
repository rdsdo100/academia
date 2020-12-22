import {getManager} from "typeorm";
import {Alunos} from "../entity/Alunos";

const buscarAlunoRepository = async ()=>{
    const usuarioRepository = getManager()
    return usuarioRepository.find(Alunos)
}






export {
    buscarAlunoRepository
}