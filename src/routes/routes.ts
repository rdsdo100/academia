import ExemplosController from '../controller/ExemplosController';
import Inicio from '../controller/Inicio';
import TestController from '../controller/TesteController';
import LoginController from '../controller/usuario/LoginController';
import UsuariosController from '../controller/usuario/UsuariosController';
import MedidasController from '../controller/medidasController/MedidasController';
import ExerciciosController from '../controller/exerciciosController/ExerciciosController';


const usuarios = new UsuariosController()
const login = new LoginController();
const inicio = new Inicio();
const exemplos = new ExemplosController();
const testController = new TestController();
const alunos = new UsuariosController();
const medidas = new MedidasController();
const exercicios = new ExerciciosController();

export const routes = [
    inicio,
    usuarios,
    exemplos,
    login,
    testController,
    alunos,
    medidas,
    exercicios
];
