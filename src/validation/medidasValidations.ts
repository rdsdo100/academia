import {celebrate, Joi, Segments} from "celebrate";

const medidasValidations = celebrate(
    {
        [Segments.BODY]:Joi.object().keys({

            idAluno : Joi.number(),
            dataAvaliacao: Joi.date(),
            peso: Joi.number().min(0),
            estatura: Joi.number().min(0),
            toraxNormal: Joi.number().min(0),
            toraxExpandido: Joi.number().min(0),
            bracoDireitoRelaxado : Joi.number().min(0),
            bracoDireitoExpandido : Joi.number().min(0),
            bracoEsquerdoRelaxado : Joi.number().min(0),
            bracoEsquerdoExpandido : Joi.number().min(0),
            cintura : Joi.number().min(0),
            abdomem : Joi.number().min(0),
            quadril : Joi.number().min(0),
            coxaMedialDireira : Joi.number().min(0),
            coxaMedialEsquerda : Joi.number().min(0),
            panturriliaDireita: Joi.number().min(0),
            panturriliaEsquerda : Joi.number().min(0),
            observacoes: Joi.string(),

            }

        )
    }, {abortEarly: false}
)

export {medidasValidations}


