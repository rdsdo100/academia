import {ClassMiddleware, Controller} from "@overnightjs/core";
import {decodificar} from "../../config/Jwt";

@Controller('treino')
@ClassMiddleware([decodificar ])

export default class TreinosController {

    async  buscarTreinos(){

    }
    async  cadastrarTreinos(){

    }

}