import {ClassMiddleware, Controller} from "@overnightjs/core";
import {decodificar} from "../../config/Jwt";

@Controller('medidas')
@ClassMiddleware([decodificar])

export default class MedidasController {

}