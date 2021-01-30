import {getConnection, getManager} from 'typeorm';
import { Academias } from '../entity/Academias';
import {Enderecos} from "../entity/Enderecos";
import {Emails} from "../entity/Emails";
import {Telefones} from "../entity/Telefones";

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
    telefones: Telefones

) => {
    let buscarAcademia
    let usuarioRetorno;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {



         buscarAcademia = await queryRunner.manager.findOne(Academias, {});





        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return usuarioRetorno;
};

export {};
