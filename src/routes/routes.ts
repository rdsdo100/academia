import ExemplosController from '../controller/ExemplosController'
import Inicio from '../controller/Inicio'
import TestController from '../controller/TesteController';
import UsuaruiosController from "../controller/usuario/UsuaruiosController";
import GurpoUsuarioController from "../controller/GurpoUsuarioController";
import LoginController from "../controller/usuario/LoginController";

const  usuario = new UsuaruiosController()
const  grupoUsusarios = new GurpoUsuarioController()
const  login = new LoginController()
const inicio = new Inicio()
const exemplos = new ExemplosController()
const testController = new TestController()



export const routes = [
    inicio, 
    exemplos,
    usuario,
    grupoUsusarios,
    login,
    testController,

]