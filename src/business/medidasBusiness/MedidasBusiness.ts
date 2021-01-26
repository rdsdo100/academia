import { cadastrarMedidas } from '../../repository/medidasAlunosRepository';
import { Medidas } from '../../entity/Medidas';
import {Usuarios} from "../../entity/Usuarios";


export default class MedidasBusiness {
    async cadastrarAlunos(medidas: Medidas, usuario: Usuarios) {
        const retorno = await cadastrarMedidas(medidas, usuario);
        return retorno;
    }
}
