import {Request,Response } from "express"
import MedicoController from "../controllers/medicoController"
import routerClass from "./routerClass"

class MedicoRouter extends routerClass{
    medicoController:MedicoController
    // Llama al constructor de la clase padre
    constructor(){
        super()
        this.medicoController = new MedicoController()
        // Define las rutas para los endpoints GET y POST
        this.routes()
    }

    // Método que define las rutas y los controladores que se ejecutan cuando se accede a ellas    
    private routes():void{
        // Endpoint GET para obtener la lista de medicos
        this.router.get("/Medico",
            (req:Request,res:Response)=>{
                this.medicoController.obtenerMedicos(req,res)
            }
        )
        // Endpoint POST crear un medico
        this.router.post("/Medico",
            (req:Request,res:Response)=>{
                this.medicoController.crearMedico(req,res)
            }
        )
    }
}
// Exportamos una instancia de MedicoRouter que contiene las rutas definidas
export default new MedicoRouter().router