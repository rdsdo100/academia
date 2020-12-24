import {getConnection} from "typeorm";
import {Alunos} from "../entity/Alunos";
import {Medidas} from "../entity/Medidas";
import {MedidasAlunos} from "../entity/MedidasAlunos";

const cadastrarMedidas = async (medidas: Medidas , alunos: Alunos)=>{

    let  salvarAlunoMedidas
    let medidasAlunos = new MedidasAlunos()

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();


    try {
        const retornoMedidas = await queryRunner.manager.save(Medidas , medidas)

        const buscarAlunos = await  queryRunner.manager.findOne(Alunos , {id: alunos.id})

        if(buscarAlunos?.id){
            medidasAlunos.alunosIdFK = buscarAlunos
            medidasAlunos.medidasIdFK = retornoMedidas
            salvarAlunoMedidas = await  queryRunner.manager.save(MedidasAlunos , medidasAlunos)
        }

        await queryRunner.commitTransaction();
    } catch (err) {

        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return salvarAlunoMedidas

}

export {
    cadastrarMedidas
}