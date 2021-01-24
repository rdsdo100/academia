import { ClassMiddleware, Controller, Get, Post } from '@overnightjs/core';
import { decodificar } from '../../config/Jwt';
import { Request, Response } from 'express';
import { Treinos } from '../../entity/Treinos';
import { Exercicios } from '../../entity/Exercicios';
import { TreinosAlunos } from '../../entity/TreinosAlunos';
import { SeriesExercicios } from '../../entity/SeriesExercicios';
import { Alunos } from '../../entity/Alunos';

@Controller('treino')
@ClassMiddleware([decodificar])
export default class TreinosController {
    @Get()
    async index(request: Request, response: Response) {}

    @Get('treino_dia')
    async buscarTreinos(request: Request, response: Response) {}
    @Post()
    async cadastrarTreinos(request: Request, response: Response) {
        const exercicios = new Exercicios();
        const serieExercicios = new SeriesExercicios();
        const treinosAlunos = new TreinosAlunos();
        const treinos = new Treinos();
        const aluno = new Alunos();

        exercicios.id = Number(request.body.exerciciosId);

        aluno.id = Number(request.body.alunoId);

        treinos.nome = String(request.body.treino);

        serieExercicios.serie = Number(request.body.serie);
        serieExercicios.vezes = String(request.body.vezes);
        serieExercicios.kilos = String(request.body.kilos);
        serieExercicios.intervalo = Number(request.body.intervalo);
        serieExercicios.tempo = Number(request.body.tempo);

        treinosAlunos.treinosIdFK = treinos;
        treinosAlunos.alunosIdFK = aluno;
    }
}
