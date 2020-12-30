import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import ExerciciosBusiness from "../../business/exerciciosBusiness/ExerciciosBusiness";



@Controller('exercicios')
@ClassMiddleware([/*decodificar,*/  ])
export default class ExerciciosController {


    @Get()
    async index(request: Request, response: Response) {
        const exerciciosBusiness = new ExerciciosBusiness()
        response.json(exerciciosBusiness.index())
    }

    @Post()
    async cadastrarExercicios(request: Request, response: Response) {

    }

    @Get()
    async buscarExercicios (request: Request, response: Response){

    }
}