import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";



@Controller('exercicios')
@ClassMiddleware([/*decodificar,*/  ])
export default class ExerciciosController {


    @Get()
    async index(request: Request, response: Response) {
        console.log("Exercicios")
    }

    @Post()
    async cadastrarExercicios(request: Request, response: Response) {

    }

    @Get()
    async buscarExercicios (request: Request, response: Response){

    }
}