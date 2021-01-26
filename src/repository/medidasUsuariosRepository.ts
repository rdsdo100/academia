import { getConnection } from 'typeorm';
import { Usuarios } from '../entity/Usuarios';
import { Medidas } from '../entity/Medidas';
import { MedidasUsuarios } from '../entity/MedidasUsuarios';

const cadastrarMedidas = async (medidas: Medidas, usuarios: Usuarios) => {
    let salvarAlunoMedidas;
    let medidasAlunos = new MedidasUsuarios();

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const retornoMedidas = await queryRunner.manager.save(Medidas, medidas);

        const buscarUsuarios = await queryRunner.manager.findOne(Usuarios, { id: usuarios.id });

        if (buscarUsuarios?.id) {
            medidasAlunos.usuariosIdFK = buscarUsuarios;
            medidasAlunos.medidasIdFK = retornoMedidas;
            salvarAlunoMedidas = await queryRunner.manager.save(MedidasUsuarios, medidasAlunos);
        }

        await queryRunner.commitTransaction();
    } catch (err) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    return salvarAlunoMedidas;
};

export { cadastrarMedidas };
