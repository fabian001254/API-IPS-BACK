import SwaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express,{ Application, Request, Response } from "express"
import {Prisma, PrismaClient} from "@prisma/client"
import PacienteRouter from "./routes/PacienteRouter"
import MedicoRouter from "./routes/MedicoRoutes"
import especialidadRoutes from "./routes/especialidadRouter"
import citaRouter from "./routes/citaRouter"
import formularioRouter from "./routes/formularioRouter"
import cors from "cors"
/**
 * Clase principal de la api
 *  @author Fabian Trujillo
 *  @description Clase de la api
 */
	class App{
	private prismaClient:PrismaClient
	public app:Application
	private server:any
    
	/**
     * Metodo constructor
     */
	constructor(){
		this.app = express()
		this.app.use(express.json())
		this.app.use(
			"/api-docs",
			SwaggerUi.serve,
			SwaggerUi.setup(swaggerSpec)
		)
		this.app.use(cors())
		this.routes()
		this.prismaClient = new PrismaClient()
	}

	/*
		Definir rutas de express
	*/
	private routes():void{
        this.app.use("/", PacienteRouter)
		this.app.use("/", MedicoRouter)
		this.app.use("/", MedicoRouter)
		this.app.use("/", especialidadRoutes)
		this.app.use("/", citaRouter)
		this.app.use("/", formularioRouter)
	}
	/*
		Metodo que inicia el servidor en el puerto 3000
	*/
	public start():void{
		this.server = this.app.listen(3000,
			()=>{console.log("Servidor iniciado 3000")})
	}
	/*
		Metodo que apaga el servidor 
	*/
	public close():void{
		this.server.close()
	}
}
export default App