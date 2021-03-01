import { getManager } from 'typeorm';
import {Telefones} from "../entity/Telefones";

const buscarTelefones = async () => {
    const buscarTelefones = await getManager().find(Telefones);
    return buscarTelefones;
};



export { buscarTelefones };
