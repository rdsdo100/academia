import {  getManager } from 'typeorm';
import {Enderecos} from "../entity/Enderecos";

const buscarEnderecos = async () => {
    const buscarEnderecos = await getManager().find(Enderecos);
    return buscarEnderecos;
};


export { buscarEnderecos };
