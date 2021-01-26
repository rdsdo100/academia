import { getConnection } from 'typeorm';
import { Usuarios } from '../entity/Usuarios';
import { Pessoas } from '../entity/Pessoas';
import { Enderecos } from '../entity/Enderecos';
import { Emails } from '../entity/Emails';
import { Telefones } from '../entity/Telefones';

const cadastrarTreino = () => {};

const cadastrarAlunos = async (pessoas: Pessoas, enderecos: Enderecos, emails: Emails, telefones: Telefones) => {
    let retornoUsuarioss;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const buscarPessoas = await queryRunner.manager.findOne(Pessoas, { cpf: pessoas.cpf });

        if (buscarPessoas?.cpf !== pessoas.cpf) {
            const retornoEnderecos = await queryRunner.manager.save(Enderecos, enderecos);
            const retornoEmails = await queryRunner.manager.save(Emails, emails);
            const retornoTelefones = await queryRunner.manager.save(Telefones, telefones);

            pessoas.enderecosIdFK = retornoEnderecos;
            pessoas.emailsIdFK = retornoEmails;
            pessoas.telefonesIdFK = retornoTelefones;

            const retornoPessoas = await queryRunner.manager.save(Pessoas, pessoas);
            retornoUsuarioss = await queryRunner.manager.save(Usuarios, { pessoasIdFK: retornoPessoas });
        } else {
            retornoUsuarioss = buscarPessoas;
        }
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return retornoUsuarioss;
};