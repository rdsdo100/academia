import ExemplosController from '../controller/ExemplosController'
import GurpoUsuarioController from '../controller/GurpoUsuarioController';
import Inicio from '../controller/Inicio'
import UsuaruiosController from "../controller/usuario/UsuaruiosController";
import LoginController from "../controller/usuario/LoginController";
import TestController from '../controller/TesteController';
const inicio = new Inicio()
const exemplos = new ExemplosController()
const usuario = new UsuaruiosController()
const grupoUsusarios = new GurpoUsuarioController()
const login = new LoginController()
const testController = new TestController()


export const routes = [
    inicio, 
    exemplos,
    usuario,
    grupoUsusarios,
    login,
    testController,

]