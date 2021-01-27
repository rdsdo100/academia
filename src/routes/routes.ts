import ExemplosController from '../controller/ExemplosController';
import Inicio from '../controller/Inicio';
import TestController from '../controller/TesteController';
import LoginController from '../controller/usuarioController/LoginController';
import UsuariosController from '../controller/usuarioController/UsuariosController';
import MedidasController from '../controller/medidasController/MedidasController';
import ExerciciosController from '../controller/exerciciosController/ExerciciosController';
import AcademiasController from "../controller/academiaRepository/AcademiasController";

const usuarios = new UsuariosController();
const login = new LoginController();
const inicio = new Inicio();
const exemplos = new ExemplosController();
const testController = new TestController();
const alunos = new UsuariosController();
const medidas = new MedidasController();
const exercicios = new ExerciciosController();
const academia = new AcademiasController()

export const routes = [
    inicio,
    academia,
    usuarios,
    exemplos,
    login,
    testController,
    alunos,
    medidas,
    exercicios
];
