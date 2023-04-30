import { Response , Request } from "express"
import Controller from "./controller"

class pacienteController extends Controller{

  /**
   * Obtiene la lista de todos los pacientes registrados.
   * @param req Request object de express.
   * @param res Response object de express.
   * @returns Un objeto JSON que contiene información de pacientes.
   */
    async obtenerPacientes(req:Request, res:Response){
        const pacientes = await this.prismaClient.paciente.findMany()
        return res.status(200).json({ pacientes })      
        
    }
    /**
     * Crea un nuevo registro de paciente en la base de datos.
     * @param req Request object de express que contiene los datos del paciente a crear.
     * @param res Response object de express.
     * @returns Un objeto JSON que contiene el mensaje de éxito y el paciente creado.
     */
    async crearPaciente(req: Request, res: Response) {
        try {
          const { cedula, nombre, apellido, fechaNacimiento, telefono } = req.body
          
          // Validación de campos vacíos
          if (Object.values({ cedula, nombre, apellido, fechaNacimiento, telefono }).some(value => !value)) {
            return res.status(400).json({ message: "Debe completar todos los campos" })
          }
        
          // Verificación de si la cedula ya está registrada
          const cedulaRepeat = await this.prismaClient.paciente.findFirst({
            where: { cedula: { equals: cedula } },
          })
          if(cedulaRepeat){
            return res.status(400).json({ message: "Este numero de cedula ya existe!" })
          }

          // Convierte la fecha de nacimiento en formato de cadena (AAAA-MM-DD) a un objeto Date de JavaScript
          const fecha = new Date(fechaNacimiento.split("-").reverse().join("-"))   
          
          // Creación del nuevo registro de médico en la base de datos     
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
          console.log(error)
        }
      }
    }      

export default pacienteController