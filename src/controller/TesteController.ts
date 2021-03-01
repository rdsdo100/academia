import { Request, Response } from 'express';
import {Controller, Get, Post} from '@overnightjs/core';

@Controller('test')
export default class TestController {
    @Get()
    async Test(request: Request, response: Response) {




    }
    @Post()
    async Resposta(request: Request, response: Response){

        console.log(request.body , request.headers.ok)
response.status(200).json({ok: "foi"})
    }
}
