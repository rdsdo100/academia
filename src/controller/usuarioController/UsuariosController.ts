import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Enderecos } from '../../entity/Enderecos';
import { Pessoas } from '../../entity/Pessoas';
import { Emails } from '../../entity/Emails';
import { Telefones } from '../../entity/Telefones';
import UsuariosBuisiness from '../../business/usuariosBusiness/UsuariosBuisiness';
import { Usuarios } from '../../entity/Usuarios';
import { TiposUsuarios } from '../../entity/TiposUsuarios';
import { Academias } from '../../entity/Academias';

@Controller('user')
//@ClassMiddleware([decodificar,usuariosValidations ])
export default class UsuariosController {
    @Get()
    async index(request: Request, response: Response) {}

    @Post()
    async cadastrPessoas(request: Request, response: Response) {
        const pessoas = new Pessoas();
        const telefones = new Telefones();
        const emails = new Emails();
        const enderecos = new Enderecos();
        const usuarios = new Usuarios();
        const tiposUsuarios = new TiposUsuarios();
        const academias = new Academias();

        pessoas.nome = String(request.body.pessoa.nome);
        pessoas.sobrenome = String(request.body.pessoa.sobrenome);
        pessoas.cpf = String(request.body.pessoa.cpf);
        pessoas.dataCadastro = new Date();
        pessoas.dataNacimento = new Date();

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

        tiposUsuarios.id = Number(request.body.tipoUsuario.tipoUsuario);

        academias.id = Number(request.body.academia.IdAcademias);

        usuarios.nomeUsuario = String(request.body.usuario.nomeUsuario);
        usuarios.email = String(request.body.email.email);
        usuarios.senha = String(request.body.usuario.senha);
        usuarios.ativo = true;
        usuarios.tiposUsuariosIdFK = tiposUsuarios;
        usuarios.academiasIdFK = academias;

        const usuariosBuisiness = new UsuariosBuisiness();

        console.log(pessoas,
            enderecos, emails, telefones, usuarios , tiposUsuarios , academias);

       const retorno = await usuariosBuisiness.cadastrarAlunos(pessoas,
            enderecos, emails, telefones, usuarios);

       return response.json(retorno);
    }
}
