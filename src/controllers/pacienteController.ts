import { Response , Request } from "express"
import Controller from "./controller"

class pacienteController extends Controller{


    async obtenerPacientes(req:Request, res:Response){
        const pacientes = await this.prismaClient.paciente.findMany()
        return res.status(200).json({ pacientes })      
        
    }

    async crearPaciente(req: Request, res: Response) {
        try {
          const { cedula, nombre, apellido, fechaNacimiento, telefono } = req.body
    
          if (Object.values({ cedula, nombre, apellido, fechaNacimiento, telefono }).some(value => !value)) {
            return res.status(400).json({ message: "Debe completar todos los campos" })
          }

          const cedulaRepeat = await this.prismaClient.paciente.findFirst({
            where: { cedula: { equals: cedula } },
          })

          if(cedulaRepeat){
            return res.status(400).json({ message: "Este numero de cedula ya existe!" })
          }
          const fecha = new Date(fechaNacimiento.split("-").reverse().join("-"))        
          const paciente = await this.prismaClient.paciente.create({
              data: {
              cedula,
              nombre,
              apellido,
              fechaNacimiento: fecha,
              telefono,
              },
          })    
          return res.status(201).json({ message: "Creado con exito ", paciente })          

          
        } catch (error) {
          res.status(400).json({ error })
        }
      }
    }      

export default pacienteController