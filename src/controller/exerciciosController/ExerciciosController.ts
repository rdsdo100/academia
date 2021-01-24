import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import ExerciciosBusiness from '../../business/exerciciosBusiness/ExerciciosBusiness';

@Controller('exercicios')
//@ClassMiddleware([/*decodificar,*/  ])
export default class ExerciciosController {
    @Get()
    async index(request: Request, response: Response) {
        const exerciciosBusiness = new ExerciciosBusiness();
        const retorno = await exerciciosBusiness.index();

        return response.json(retorno);
    }

    @Post()
    async cadastrarExercicios(request: Request, response: Response) {
        let nomeExercicio = String(request.body.nomeExercicio);
        const exerciciosBusiness = new ExerciciosBusiness();
        const retorno = await exerciciosBusiness.cadasterarExercicios(nomeExercicio);
        return response.json(retorno);
    }

    @Get('buscarExercicios')
    async buscarExercicios(request: Request, response: Response) {}
}
