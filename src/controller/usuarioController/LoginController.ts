import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import LoginBusiness from '../../business/usuariosBusiness/LoginBusiness';

@Controller('login')
export default class LoginController {
    @Get()
    async login(request: Request, response: Response) {
        let authorization
        const loginBusiness = new LoginBusiness();
        const user = String(request.headers.user);
        const password = String(request.headers.password);


        authorization = await loginBusiness.login(user, password);


        return response.json({
            authorization,
        });
    }
}
