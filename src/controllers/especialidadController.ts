import { Response , Request } from "express"
import Controller from "./controller"

class EspecialidadController extends Controller{

    async crearEspecialidad(req:Request,res:Response){	
        try{            
            const { nombre } = req.body
            if (!nombre) {
                return res.status(400).json({ mensaje: "Falta el nombre de la especialidad" })
            }
            const nombreM = nombre.toUpperCase()
            const nombreRepeat = await this.prismaClient.especialidad.findFirst({
                where: { nombre: { equals: nombreM } },
            })
            if(nombreRepeat){
                return res.status(400).json({ message: "Esta especialidad ya existe"})
            }
            const especialidad = await this.prismaClient.especialidad.create({
                  data: {
                    nombre: nombreM,
                  },
                })
            return res.status(201).json({ message: "Creado con exito ", especialidad})
                        
            
        }catch(e){
            console.error(e)
            res.status(500).json({ message: "Error creando especialidad" })
        }			
    }
    async obtenerEspecialidad(req:Request, res:Response){
        try{
            const especialidad = await this.prismaClient.especialidad.findMany()
            res.status(200).json(especialidad)
        }catch(e){
            console.error(e)
            res.status(500).json({ message: "Error en listar la especialidad" })
        }
        
        
    }
      
}
export default EspecialidadController