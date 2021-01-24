import { cadastrarMedidas } from '../../repository/medidasAlunosRepository';
import { Medidas } from '../../entity/Medidas';
import { Alunos } from '../../entity/Alunos';

export default class MedidasBusiness {
    async cadastrarAlunos(medidas: Medidas, alunos: Alunos) {
        const retorno = await cadastrarMedidas(medidas, alunos);
        return retorno;
    }
}
