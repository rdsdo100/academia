import {Controller, Get, Post} from "@overnightjs/core";
import { Request, Response} from "express";
import {Enderecos} from "../../entity/Enderecos";
import {Pessoas} from "../../entity/Pessoas";
import {Emails} from "../../entity/Emails";
import {Telefones} from "../../entity/Telefones";
import AlunosBuisiness from "../../business/alunosBuisiness/AlunosBuisiness";



@Controller('alunos')
export default class AlunosController{

    @Get()
    async index(request: Request , response: Response) {


    }

    @Post()
    async cadastrPessoas(request: Request , response: Response){

        const pessoas = new Pessoas()
        const telefones = new Telefones()
        const emails = new Emails()
        const enderecos = new Enderecos()

        pessoas.nome = String(request.body.pessoa.nome)
        pessoas.sobrenome = String(request.body.pessoa.sobrenome)
        pessoas.cpf = String(request.body.pessoa.cpf)
        pessoas.dataCadastro = new Date()
        pessoas.dataNacimento = new Date()
        pessoas.ativo = true

        enderecos.cep =  String(request.body.endereco.cep)
        enderecos.logradouro = String(request.body.endereco.logradouro)
        enderecos.complemento = String(request.body.endereco.complemento)
        enderecos.bairro = String(request.body.endereco.bairro)
        enderecos.localidade = String(request.body.endereco.localidade)
        enderecos.uf = String(request.body.endereco.uf)
        enderecos.ibge = String(request.body.endereco.ibge)
        enderecos.numero = String(request.body.endereco.numero)

        telefones.dd =  String(request.body.telefone.dd)
        telefones.telefone =  String(request.body.telefone.telefone)

        emails.email =  String(request.body.email.email)
        const alunosBuisiness = new  AlunosBuisiness()

      const retorno = await  alunosBuisiness.cadastrarAlunos(pessoas,enderecos,emails,telefones)

return response.json(retorno)


    }
}