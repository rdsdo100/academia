import ExemplosController from '../controller/ExemplosController';
import Inicio from '../controller/Inicio';
import TestController from '../controller/TesteController';
import LoginController from '../controller/usuarioController/LoginController';
import MedidasController from '../controller/medidasController/MedidasController';
import ExerciciosController from '../controller/exerciciosController/ExerciciosController';
import UsuariosController from '../controller/usuarioController/UsuariosController';
import AcademiasController from "../controller/academiaRepository/AcademiasController";

const login = new LoginController();
const inicio = new Inicio();
const exemplos = new ExemplosController();
const testController = new TestController();
const medidas = new MedidasController();
const exercicios = new ExerciciosController();
const usuarios = new UsuariosController();
const academia = new AcademiasController()

export const routes = [exemplos, inicio, testController, medidas, login, exercicios, usuarios, academia];
