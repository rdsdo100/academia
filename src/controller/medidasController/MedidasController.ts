import {ClassMiddleware, Controller, Get, Post} from "@overnightjs/core";
import {Request, Response} from "express";
import {Medidas} from "../../entity/Medidas";
import {Alunos} from "../../entity/Alunos";
import {medidasValidations} from "../../validation/medidasValidations";
import MedidasBusiness from "../../business/medidasBusiness/MedidasBusiness";

@Controller('medidas')
@ClassMiddleware([/*decodificar,*/ medidasValidations ])
export default class MedidasController {


    @Get()
    async index(request: Request , response: Response){
        console.log("medida")
    }

   @Post()
    async cadastrarMedidas(request: Request , response: Response){

        const medida = new Medidas()
        const alunos = new Alunos()

        alunos.id = Number(request.body.idAluno)

        medida.dataAvaliacao = new Date()
        medida.peso= Number(request.body.peso)
        medida.estatura = Number(request.body.estatura)
        medida.toraxNormal = Number(request.body.toraxNormal)
        medida.toraxExpandido = Number(request.body.toraxExpandido)
        medida.bracoDireitoRelaxado = Number(request.body.bracoDireitoRelaxado)
        medida.bracoDireitoExpandido = Number(request.body.bracoDireitoExpandido)
       medida.bracoEsquerdoRelaxado = Number(request.body.bracoDireitoRelaxado)
       medida.bracoEsquerdoExpandido = Number(request.body.bracoEsquerdoExpandido)
        medida.cintura = Number(request.body.cintura)
        medida.abdomem = Number(request.body.abdomem)
        medida.quadril = Number(request.body.quadril)
        medida.coxaMedialDireira = Number(request.body.coxaMedialDireira)
        medida.coxaMedialEsquerda = Number(request.body.coxaMedialEsquerda)
        medida.panturriliaDireita = Number(request.body.panturriliaDireita)
        medida.panturriliaEsquerda = Number(request.body.panturriliaEsquerda)
        medida.observacoes = String(request.body.observacoes)



      const medidasBusiness = new MedidasBusiness()
       const retorno = await medidasBusiness.cadastrarAlunos(medida , alunos)


        response.json(retorno)
    }

}