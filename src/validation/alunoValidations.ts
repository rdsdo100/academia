import { celebrate, Joi, Segments } from 'celebrate';

const usuariosValidations = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            pessoa: {
                nome: Joi.string().required(),
                sobrenome: Joi.string().required(),
                cpf: Joi.string().length(11),
                dataNacimento: Joi.date(),
            },
            endereco: {
                cep: Joi.string().length(7),
                logradouro: Joi.string(),
                complemento: Joi.string(),
                bairro: Joi.string(),
                localidade: Joi.string(),
                uf: Joi.string().length(2),
                ibge: Joi.string(),
                numero: Joi.string(),
            },
            email: {
                email: Joi.string().email(),
            },
            telefone: {
                dd: Joi.string().max(3).min(2),
                telefone: Joi.string().max(9).min(8),
            },
        }),
    },
    { abortEarly: false },
);

export { alunosValidations };
