import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {decodificar} from "../../config/Jwt";
import {Request, Response} from "express";

@Controller('treino')
@ClassMiddleware([decodificar ])

export default class TreinosController {

    @Get()
    async  index(request: Request , response: Response){

    }

    @Get("treino_dia")
    async  buscarTreinos(request: Request , response: Response){


    }
    @Post()
    async  cadastrarTreinos(request: Request , response: Response){

    }

}