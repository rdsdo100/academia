import {getConnection, getManager} from "typeorm";
import {Alunos} from "../entity/Alunos";
import {Pessoas} from "../entity/Pessoas";
import {Enderecos} from "../entity/Enderecos";
import {Emails} from "../entity/Emails";
import {Telefones} from "../entity/Telefones";
import {Personals} from "../entity/Personals";

const buscarPersonalsRepository = async ()=>{
    const usuarioRepository = getManager()
    return usuarioRepository.find(Alunos)
}
const cadastrarPersonals = async (pessoas: Pessoas ,
                               enderecos: Enderecos ,
                               emails: Emails ,
                               telefones: Telefones)=>{

    let retornoPersonal
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
        retornoPersonal = await queryRunner.manager.save(Personals, {pessoasIdFK : retornoPessoas} )

        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return  retornoPersonal
}

export {
    buscarPersonalsRepository,
    cadastrarPersonals
}