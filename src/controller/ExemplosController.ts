import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('exemplos')
export default class ExemplosController {
    @Get()
    exemplo(_: Request, response: Response) {
        return response.json({
            rotasExemplos: ['/usuarios'],
        });
    }

    @Get('usuarios')
    exemploUsuarios(_: Request, response: Response) {
        response.json({
            usuarios: {
                usuarios: {
                    rota: '/user',
                    requisicao: {
                        get: {
                            heades: {},
                            params: '',
                            body: {},
                        },
                        post: {
                            heades: {},
                            params: '',
                            body: {

                                "pessoa" : {
                                    "nome" :"",
                                    "obrenome":"",
                                    "cpf":"",
                                    "dataNacimento":""
                                },

                                "endereco" : {
                                    "cep":"",
                                    "logradouro":"",
                                    "complemento":"",
                                    "bairro":"",
                                    "localidade":"",
                                    "uf":"",
                                    "ibge":"",
                                    "numero":""
                                },

                                "telefone": {
                                    "dd":"",
                                    "telefone":""
                                },

                                "email": {
                                    "email":""
                                },

                                "tiposUsuario": {
                                    "iposUsuarios":""
                                },

                                "usuario": {
                                    "nomeUsuario": "",
                                    "senha": ""
                                }
                        },
                    },
                    delete: {
                        heades: {},
                        params: '/number',
                        body: {},
                    },
                    update: {
                        heades: {},
                        params: '/number',
                        body: {},
                    },
                },
            },
            tipoUsuario: {
                rota: '/tipo-usuario',
                requisicao: {
                    get: {
                        heades: {},
                        params: '',
                        body: {},
                    },
                    post: {
                        heades: {},
                        params: '',
                        body: {},
                    },
                    delete: {
                        heades: {},
                        params: '/number',
                        body: {},
                    },
                    update: {
                        heades: {},
                        params: '/number',
                        body: {},
                    },
                },
            },
        },
    });
}

    @Get('academia')
    exemploAcademias(_: Request, response: Response) {
        response.json({
            usuarios: {
                usuarios: {
                    rota: '/user',
                    requisicao: {
                        get: {
                            heades: {},
                            params: '',
                            body: {},
                        },
                        post: {
                            heades: {},
                            params: '',
                            body: {

                                "academia" : {
                                    "nomeFantazia":"",
                                    "nomeRazaoSocial":"",
                                    "cpfCnpj":""
                                },

                                "endereco" : {
                                    "cep":"",
                                    "logradouro":"",
                                    "complemento":"",
                                    "bairro":"",
                                    "localidade":"",
                                    "uf":"",
                                    "ibge":"",
                                    "numero":""
                                },

                                "telefone": {
                                    "dd":"",
                                    "telefone":""
                                },

                                "email": {
                                    "email":""
                                },

                                "tiposUsuario": {
                                    "iposUsuarios":""
                                },

                                "usuario": {
                                    "nomeUsuario":"",
                                    "senha":""
                                }

                            }
                        },
                        delete: {
                            heades: {},
                            params: '/number',
                            body: {},
                        },
                        update: {
                            heades: {},
                            params: '/number',
                            body: {},
                        },
                    },
                },
                tipoUsuario: {
                    rota: '/tipo-usuario',
                    requisicao: {
                        get: {
                            heades: {},
                            params: '',
                            body: {},
                        },
                        post: {
                            heades: {},
                            params: '',
                            body: {},
                        },
                        delete: {
                            heades: {},
                            params: '/number',
                            body: {},
                        },
                        update: {
                            heades: {},
                            params: '/number',
                            body: {},
                        },
                    },
                },
            },
        });
    }

}
