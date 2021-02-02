import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Enderecos } from '../../entity/Enderecos';
import { Emails } from '../../entity/Emails';
import { Telefones } from '../../entity/Telefones';
import { Academias } from '../../entity/Academias';

@Controller('academia')

export default class AcademiasController {

    @Get()
    async index(request: Request, response: Response) {}

    @Post()
    async cadastrPessoas(request: Request, response: Response) {
       const  telefones = new Telefones();
        const  emails = new Emails();
        const enderecos = new Enderecos();
        const academia = new Academias();
        enderecos.cep = String(request.body.endereco.cep);
        enderecos.logradouro = String(request.body.endereco.logradouro);
        enderecos.complemento = String(request.body.endereco.complemento);
        enderecos.bairro = String(request.body.endereco.bairro);
        enderecos.localidade = String(request.body.endereco.localidade);
        enderecos.uf = String(request.body.endereco.uf);
        enderecos.ibge = String(request.body.endereco.ibge);
        enderecos.numero = String(request.body.endereco.numero);

        telefones.dd = String(request.body.telefone.dd);
        telefones.telefone = String(request.body.telefone.telefone);

        emails.email = String(request.body.email.email);

        academia.nomeFantazia = String(request.body.academia.nomeFantazia);
        academia.nomeRazaoSocial = String(request.body.academia.nomeRazaoSocial);
        academia.cpfCnpj = String(request.body.academia.cpfCnpj);


        
        return response.json({


        });
    }
}
