import {Controller, Get} from "@overnightjs/core";
import {Request, Response} from "express";

@Controller('alunos')
export default class AlunosController {

    @Get()
    async index(request: Request, response: Response) {


    }
}