import ExemplosController from '../controller/ExemplosController'
import Inicio from '../controller/Inicio'
import TestController from '../controller/TesteController';
import UsuaruiosController from "../controller/usuario/UsuaruiosController";
import LoginController from "../controller/usuario/LoginController";
import AlunosController from "../controller/alunos/AlunosController";
import MedidasController from "../controller/medidasController/MedidasController";

const usuario = new UsuaruiosController()
const login = new LoginController()
const inicio = new Inicio()
const exemplos = new ExemplosController()
const testController = new TestController()
const alunos = new AlunosController
const medidas = new MedidasController()


export const routes = [
    inicio, 
    exemplos,
    usuario,
    login,
    testController,
    alunos,
    medidas

]