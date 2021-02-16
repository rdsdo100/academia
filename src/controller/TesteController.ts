import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import {buscarPermissoesRtasUusariosRepository} from "../repository/permissoesRtasUusariosRepository";



@Controller('test')
export default class TestController {
    @Get()
    async Test(request: Request, response: Response) {



    }
}
