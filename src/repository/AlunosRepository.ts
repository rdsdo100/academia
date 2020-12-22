import {getConnection, getManager} from "typeorm";
import {Alunos} from "../entity/Alunos";
import {Pessoas} from "../entity/Pessoas";
import {Enderecos} from "../entity/Enderecos";
import {Emails} from "../entity/Emails";
import {Telefones} from "../entity/Telefones";

const buscarAlunoRepository = async ()=>{
    const usuarioRepository = getManager()
    return usuarioRepository.find(Alunos)
}
const cadastrarAlunos = async (pessoas: Pessoas ,
                               enderecos: Enderecos ,
                               emails: Emails ,
                               telefones: Telefones)=>{

    let cadastroAlunos
    const alunos = new Alunos()

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();


    try {

        //cadastroAlunos = await queryRunner.manager.getRepository(Alunos).findOne()
        const retornoEnderecos = await queryRunner.manager.save(Enderecos, enderecos )



        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return true
}





export {
    buscarAlunoRepository,
    cadastrarAlunos
}