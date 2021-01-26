import { getConnection } from 'typeorm';
import { Pessoas } from '../entity/Pessoas';


const cadastrarTreino = async () => {

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const buscarTreinos = await queryRunner.manager.findOne(Pessoas, {});


        await queryRunner.commitTransaction();
    } catch (err) {
        console.log(err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }


};
