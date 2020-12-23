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

    let retornoAlunos
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

        const retornoEnderecos = await queryRunner.manager.save(Enderecos, enderecos )
        const retornoEmails = await queryRunner.manager.save(Emails, emails )
        const retornoTelefones = await queryRunner.manager.save(Telefones, telefones )

        pessoas.enderecosIdFK = retornoEnderecos
        pessoas.emailsIdFK = retornoEmails
        pessoas.telefonesIdFK = retornoTelefones

        const retornoPessoas = await queryRunner.manager.save(Pessoas, pessoas )
         retornoAlunos = await queryRunner.manager.save(Alunos, {pessoasIdFK : retornoPessoas} )

        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return  retornoAlunos
}

export {
    buscarAlunoRepository,
    cadastrarAlunos
}