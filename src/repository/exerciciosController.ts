import {getConnection, getManager} from "typeorm";
import {Exercicios} from "../entity/Exercicios";

const buscarExercicios = async ()=>{

    const buscarexercicios = await getManager().find(Exercicios)
    return buscarexercicios

}

const cadastrarExercicios = async (nomeExercicios: string)=>{

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

        const buscarexercicios = await queryRunner.manager.findOne(Exercicios ,{nome: nomeExercicios })

        await queryRunner.commitTransaction();
    } catch (err) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

}

export {
    buscarExercicios,
    cadastrarExercicios
}