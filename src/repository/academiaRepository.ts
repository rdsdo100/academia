import { getConnection, getManager } from 'typeorm';
import { Academias } from '../entity/Academias';
import { Enderecos } from '../entity/Enderecos';
import { Emails } from '../entity/Emails';
import { Telefones } from '../entity/Telefones';

const buscarAcademiasIdRepository = async (idAcademia: number) => {
    const usuarioRepository = getManager();
    return usuarioRepository.findOne(Academias, idAcademia);
};

const listAcademiasRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Academias);
};

const updateAcademiasRepository = async (academia: Academias) => {
    const usuarioRepository = getManager();
};

const deleteAcademiasIdRepository = async (idAcademias: number) => {};

const buscarAcademiaRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Academias);
};

const cadastrarAcademiasRepository = async (
    academia: Academias,
    enderecos: Enderecos,
    emails: Emails,
    telefones: Telefones,
) => {
    let buscarAcademia;
    let retornoEnderecos;
    let retornoEmails;
    let retornoTelefones;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        buscarAcademia = await queryRunner.manager.findOne(Academias, { cpfCnpj: academia.cpfCnpj });
        if (buscarAcademia?.cpfCnpj !== academia.cpfCnpj) {
            retornoEnderecos = await queryRunner.manager.save(Enderecos, enderecos);
            retornoEmails = await queryRunner.manager.save(Emails, emails);
            retornoTelefones = await queryRunner.manager.save(Telefones, telefones);

            academia.enderecosIdFK = retornoEnderecos;
            academia.emailsIdFK = retornoEmails;
            academia.telefonesIdFK = retornoTelefones;

            buscarAcademia = await queryRunner.manager.save(Academias, academia);
        } else {
            return {
                buscarAcademia,
                message: 'Cnpj ou Cpf de Academia Já cadastrada!',
            };
        }

        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return buscarAcademia;
};

export { cadastrarAcademiasRepository };
