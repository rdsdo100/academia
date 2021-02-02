import {Enderecos} from "../../entity/Enderecos";
import {Telefones} from "../../entity/Telefones";
import {Emails} from "../../entity/Emails";
import {Academias} from "../../entity/Academias";
import {cadastrarAcademiasRepository} from "../../repository/academiaRepository";

export  default class AcademiaBusiness {
    async index(){

    }
    async cadastroAcadamia (enderecos: Enderecos,
                            telefones: Telefones,
                            emails: Emails,
                            academia: Academias){

return await cadastrarAcademiasRepository(
    academia,
            enderecos,
            emails,
            telefones
)

    }
}