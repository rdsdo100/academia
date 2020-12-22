import {Controller, Get, Post} from "@overnightjs/core";
import { Request, Response} from "express";

interface IEndereco{
    cep: string ,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    numero: string
}
interface IEmail{
    email: string
}
interface ITelefone{
    dd: string,
    telefone: string
}
interface IPessoa {
    nome: string,
    sobrenome: string,
    cpf: string,
    dataNacimento: String,
    dataCadastro: Date,
    ativo: boolean,
}

@Controller('pessoas')
export default class PessoasController{

    @Get()
    async index(request: Request , response: Response) {


    }

    @Post()
    async cadastrPessoas(request: Request , response: Response){
        let pessoa: IPessoa
        let endereco: IEndereco
        let telefone: ITelefone
        let email: IEmail

        pessoa= {
            nome :String(request.body.pessoa.nome),
            sobrenome : String(request.body.pessoa.sobrenome),
            cpf : String(request.body.pessoa.cpf),
            dataCadastro : new Date(),
            dataNacimento : String(request.body.pessoa.dataNacimento),
            ativo : true
        }
        endereco = {
            cep:  String(request.body.endereco.cep),
            logradouro: String(request.body.endereco.logradouro),
            complemento: String(request.body.endereco.complemento),
            bairro: String(request.body.endereco.bairro),
            localidade: String(request.body.endereco.localidade),
            uf: String(request.body.endereco.uf),
            ibge: String(request.body.endereco.ibge),
            numero: String(request.body.endereco.numero)
        }
        telefone= {
            dd:  String(request.body.telefone.dd),
            telefone:  String(request.body.telefone.telefone)
        }
        email = {
            email:  String(request.body.email.email)
        }

       return response.json({pessoa , endereco , telefone , email})


    }
}