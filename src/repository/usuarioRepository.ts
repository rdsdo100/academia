import { getConnection, getManager } from 'typeorm';
import { Usuarios } from '../entity/Usuarios';
import { Pessoas } from '../entity/Pessoas';
import { Enderecos } from '../entity/Enderecos';
import { Emails } from '../entity/Emails';
import { Telefones } from '../entity/Telefones';

const buscarUsuarioRepository = async (nomeUsuario: string) => {
    const usuarioRepository = getManager();
    return usuarioRepository.findOne(Usuarios, { nomeUsuario: nomeUsuario });
};

const buscarUsuarioIdRepository = async (idUsuario: number) => {
    const usuarioRepository = getManager();
    return usuarioRepository.findOne(Usuarios, idUsuario);
};

const listUsuarioRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};

const updateUsuarioRepository = async (usuarios: Usuarios) => {
    const usuarioRepository = getManager();
};

const deleteUsuarioIdRepository = async (idUsuario: number) => {


};

const buscarUsuariosRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};

const cadastrarUsuariosRepository = async (
    pessoas: Pessoas,
    enderecos: Enderecos,
    emails: Emails,
    telefones: Telefones,
    usuarios: Usuarios
) => {
    let retornoUsuarios;
    let usuarioRetorno;
    let retornoPessoas
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

        usuarioRetorno = await queryRunner.manager.findOne(Usuarios, { nomeUsuario: usuarios.nomeUsuario });

        const buscarPessoas = await queryRunner.manager.findOne(Pessoas, { cpf: pessoas.cpf });

        if ((buscarPessoas?.cpf !== pessoas.cpf) && (!(usuarioRetorno?.nomeUsuario === ''))) {
            const retornoEnderecos = await queryRunner.manager.save(Enderecos, enderecos);
            const retornoEmails = await queryRunner.manager.save(Emails, emails);
            const retornoTelefones = await queryRunner.manager.save(Telefones, telefones);

            pessoas.enderecosIdFK = retornoEnderecos;
            pessoas.emailsIdFK = retornoEmails;
            pessoas.telefonesIdFK = retornoTelefones;

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
};

export {
    buscarUsuarioRepository,
    buscarUsuarioIdRepository,
    listUsuarioRepository,
    updateUsuarioRepository,
    deleteUsuarioIdRepository,
    buscarUsuariosRepository,
    cadastrarUsuariosRepository,
};
