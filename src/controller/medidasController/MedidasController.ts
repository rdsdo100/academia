import {ClassMiddleware, Controller} from "@overnightjs/core";
import {decodificar} from "../../config/Jwt";
import {Request, Response} from "express";
import {Medidas} from "../../entity/Medidas";
import {medidasValidations} from "../../validation/medidasValidations";

@Controller('medidas')
@ClassMiddleware([decodificar, medidasValidations])

export default class MedidasController {


    async cadastrarMedidas(request: Request , response: Response){

        const medida = new Medidas()
        medida.dataAvaliacao = new Date()
        medida.peso= Number(request.body.peso)
        medida.estatura = Number(request.body.estatura)
        medida.toraxNormal = Number(request.body.toraxNormal)
        medida.toraxExpandido = Number(request.body.toraxExpandido)
        medida.bracoDireitoRelaxado = Number(request.body.bracoDireitoRelaxado)
        medida.bracoDireitoExpandido = Number(request.body.bracoDireitoExpandido)
        medida.cintura = Number(request.body.cintura)
        medida.abdomem = Number(request.body.abdomem)
        medida.quadril = Number(request.body.quadril)
        medida.coxaMedialDireira = Number(request.body.coxaMedialDireira)
        medida.coxaMedialEsquerda = Number(request.body.coxaMedialEsquerda)
        medida.panturriliaDireita = Number(request.body.panturriliaDireita)
        medida.panturriliaEsquerda = Number(request.body.panturriliaEsquerda)
        medida.observacoes = String(request.body.observacoes)


    }

}