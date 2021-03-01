import { buscarExercicios, cadastrarExercicios } from '../../repository/exerciciosRepository';

export default class ExerciciosBusiness {
    async index() {
        return await buscarExercicios();
    }

    async cadasterarExercicios(nomeExercicios: string) {
        return await cadastrarExercicios(nomeExercicios);
    }
}
