import {ClassMiddleware, Controller, Get, Middleware, Post} from '@overnightjs/core';
import { Request, Response } from 'express';
import { Enderecos } from '../../entity/Enderecos';
import { Emails } from '../../entity/Emails';
import { Telefones } from '../../entity/Telefones';
import {Academias} from "../../entity/Academias";


@Controller('academia')
@ClassMiddleware([/*decodificar,*/ ])
export default class AcademiasController {

    telefones = new Telefones();
    emails = new Emails();
    enderecos = new Enderecos();
    academia = new Academias();


    @Get()
    async index(request: Request, response: Response) {}


    @Post()
    @Middleware([])
    async cadastrPessoas(request: Request, response: Response) {

        this.enderecos.cep = String(request.body.endereco.cep);
        this.enderecos.logradouro = String(request.body.endereco.logradouro);
        this.enderecos.complemento = String(request.body.endereco.complemento);
        this.enderecos.bairro = String(request.body.endereco.bairro);
        this.enderecos.localidade = String(request.body.endereco.localidade);
        this.enderecos.uf = String(request.body.endereco.uf);
        this.enderecos.ibge = String(request.body.endereco.ibge);
        this.enderecos.numero = String(request.body.endereco.numero);

        this.telefones.dd = String(request.body.telefone.dd);
        this.telefones.telefone = String(request.body.telefone.telefone);

        this.emails.email = String(request.body.email.email);

        this.academia.nomeFantazia = String(request.body.academia.nomeFantazia);
        this.academia.nomeRazaoSocial = String(request.body.academia.nomeRazaoSocial);
        this.academia.cpfCnpj = String(request.body.academia.cpfCnpj);


        return response.json("retorno");
    }
}
