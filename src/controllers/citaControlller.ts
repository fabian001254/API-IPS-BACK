import { Response , Request } from "express"
import Controller from "./controller"

class CitaController extends Controller{

    async crearCita(req:Request, res: Response){
        try{

           const {fecha,pacienteCedula,tarjetaProfesional} = req.body

           if (Object.values({ fecha,pacienteCedula,tarjetaProfesional }).some(value => !value)) {
            return res.status(400).json({ message: "Debe completar todos los campos" })
            }

            const cedulaExist = await this.prismaClient.paciente.findFirst({
                where: { cedula: { equals: pacienteCedula } },
            })
            
            const tarjetaExist = await this.prismaClient.medico.findFirst({
                where: { tarjetaProfesional: { equals: tarjetaProfesional } },
            })
    
            if(!cedulaExist || !tarjetaExist){
              return res.status(400).json({ message: "Este numero de cedula no existe!" })
            }

            const fechaCita = new Date(fecha.split("-").reverse().join("-"))       

            const cita = await this.prismaClient.cita.create({
                data: {                    
                    fecha: fechaCita,
                    pacienteCedula,
                    tarjetaProfesional
                }
            }) 
            return res.status(201).json({ message: "Creada con exito ", cita})   
        }catch(e){
            console.error(e)
            res.status(500).json({ message: "Error en crear cita" })
        }
    }
    async obtenerCitas(req:Request, res:Response){
        try{
            const citas = await this.prismaClient.cita.findMany({
                include: {
                  Paciente:true,
                  Medico:true
                },
              })
              
              const resultado = citas.map((cita) => ({
                Nombre_Medico: cita.Medico?.nombre,
                Apellido_Medico: cita.Medico?.apellido,
                Nombre_Paciente: cita.Paciente?.nombre,
                Apellido_Paciente: cita.Paciente?.apellido,
                Cedula_Paciente: cita.Paciente?.cedula,
                Dia_Cita: cita.fecha

              }))
            
            res.status(201).json(resultado)
        }catch(e){
            console.error(e)
            res.status(500).json({ message: "Error en listar las citas" })
        }
    }

}
export default CitaController