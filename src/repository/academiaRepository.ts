import {getManager } from 'typeorm';
import {Academias} from "../entity/Academias";


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

const deleteAcademiasIdRepository = async (idAcademias: number) => {


};

const buscarAcademiaRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Academias);
};

/*const cadastrarAcademiasRepository = async (
    academia: Academias,
    enderecos: Enderecos,
    emails: Emails,
    telefones: Telefones

) => {
    let retornoUsuarios;
    let usuarioRetorno;
    let retornoPessoas
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {



        const buscarAcademia = await queryRunner.manager.findOne(Academias, {});

        if ((buscarAcademia?. !== pessoas.cpf) && (!(usuarioRetorno?.nomeUsuario === ''))) {
            const retornoEnderecos = await queryRunner.manager.save(Enderecos, enderecos);
            const retornoEmails = await queryRunner.manager.save(Emails, emails);
            const retornoTelefones = await queryRunner.manager.save(Telefones, telefones);

            academia.enderecosIdFK = retornoEnderecos;
            academia.emailsIdFK = retornoEmails;
            academia.telefonesIdFK = retornoTelefones;

            retornoPessoas = await queryRunner.manager.save(Pessoas, pessoas);

            usuarios.pessoasIdFK = retornoPessoas
            usuarioRetorno = await queryRunner.manager.save(usuarios);

            retornoUsuarios = await queryRunner.manager.save(Usuarios, { pessoasIdFK: retornoPessoas });
        } else {
            retornoUsuarios = buscarPessoas;
        }
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return usuarioRetorno;
};*/

export {

};
