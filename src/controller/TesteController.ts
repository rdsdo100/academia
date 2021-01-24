import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';

interface IEnderecos {
    estoque?: string;
    zona: string;
    rua: string;
    coluna: string;
    nivel: string;
}

@Controller('test')
export default class TestController {
    @Get()
    async Test(request: Request, response: Response) {}
}
