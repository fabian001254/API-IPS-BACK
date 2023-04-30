import {Request,Response } from "express"
import PacienteController from "../controllers/pacienteController"
import routerClass from "./routerClass"
class PacienteRouter extends routerClass{
    pacienteController: PacienteController
    constructor(){
        // Llama al constructor de la clase padre
        super()
        this.pacienteController = new PacienteController()
        // Define las rutas para los endpoints GET y POST
        this.routes()
    }

    // Método que define las rutas y los controladores que se ejecutan cuando se accede a ellas    
    private routes():void{
        // Endpoint GET para obtener la lista de pacientes
        this.router.get(
			"/Paciente",
			(req:Request,res:Response)=>{
                this.pacienteController.obtenerPacientes(req,res)
            }
		)

        // Endpoint POST para crear pacientes
		this.router.post(
			"/Paciente",
            (req:Request,res:Response)=>{
                this.pacienteController.crearPaciente(req,res)
            }
		)
    }
}
// Exportamos una instancia de PacienteRouter que contiene las rutas definidas
export default new PacienteRouter().router