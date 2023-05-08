import {Request,Response, Router } from "express"
import FormularioController from "../controllers/FormularioController"
import routerClass from "./routerClass"

class formularioRouter extends routerClass {
    formularioController: FormularioController
    constructor(){
        super()
        this.formularioController = new FormularioController()        
        this.routes()
    }
    private routes():void{
        this.router.get(
            "/formulario/:formulario",
            (req:Request, res:Response)=>{
                 this.formularioController.obtenerDefinicion(req,res)
            }
        )
    }
}
export default new formularioRouter().router