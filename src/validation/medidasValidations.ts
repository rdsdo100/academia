import {celebrate, Joi, Segments} from "celebrate";

const medidasValidations = celebrate(
    {
        [Segments.BODY]:Joi.object().keys({

            idAluno : Joi.number(),
            dataAvaliacao: Joi.date(),
            peso: Joi.number(),
            estatura: Joi.number(),
            toraxNormal: Joi.number(),
            toraxExpandido: Joi.number(),
            bracoDireitoRelaxado : Joi.number(),
            bracoDireitoExpandido : Joi.number(),
            cintura : Joi.number(),
            abdomem : Joi.number(),
            quadril : Joi.number(),
            coxaMedialDireira : Joi.number(),
            coxaMedialEsquerda : Joi.number(),
            panturriliaDireita: Joi.number(),
            panturriliaEsquerda : Joi.number(),
            observacoes: Joi.string(),


            }
        )
    }, {abortEarly: false}
)

export {medidasValidations}


