import {getConnection, getManager} from "typeorm";
import {Exercicios} from "../entity/Exercicios";

const buscarExercicios = async ()=>{

    const buscarexercicios = await getManager().find(Exercicios)
    return buscarexercicios

}

const cadastrarExercicios = async (nomeExercicios: string)=>{

    let retonoCadastroExercicios
    const exercicio = new Exercicios()
    exercicio.nome = String(nomeExercicios)

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

        const buscarexercicios = await queryRunner.manager.findOne(Exercicios ,{nome: exercicio.nome })



        if (buscarexercicios?.nome !== nomeExercicios){
            retonoCadastroExercicios = await queryRunner.manager.save(Exercicios , exercicio)

            console.log(retonoCadastroExercicios)

        }else {
            retonoCadastroExercicios = {Error: "Exercicios não salvo!"}
        }

        await queryRunner.commitTransaction();
    } catch (err) {
        await queryRunner.rollbackTransaction();
        console.log(err)
    } finally {
        await queryRunner.release();
    }



    console.log(retonoCadastroExercicios)
    return retonoCadastroExercicios

}

export {
    buscarExercicios,
    cadastrarExercicios
}