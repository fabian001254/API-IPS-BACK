import { Response, Request } from "express"
import Controller from "./controller"

class MedicoController extends Controller {
  /**
   * Obtiene la lista de todos los médicos registrados, incluyendo su especialidad.
   * @param req Request object de express.
   * @param res Response object de express.
   * @returns Un objeto JSON que contiene información de los médicos con su respectiva especialidad.
   */
  async obtenerMedicos(req: Request, res: Response) {
    try {
      const medicos = await this.prismaClient.medico.findMany({
        include: {
          Especialidad: true,
        },
      })

      const resultado = medicos.map((medico) => ({
        tarjetaProfesional: medico.tarjetaProfesional,
        nombre: medico.nombre,
        apellido: medico.apellido,
        consultorio: medico.consultorio,
        correo: medico.correo,
        especialidad: medico.Especialidad?.nombre,
      }))

      res.status(200).json(resultado)
    } catch (e) {
      console.error(e)
      res
        .status(500)
        .json({ message: "Error en listar los médicos y su especialidad" })
    }
  }

  /**
   * Crea un nuevo registro de médico en la base de datos.
   * @param req Request object de express que contiene los datos del médico a crear.
   * @param res Response object de express.
   * @returns Un objeto JSON que contiene el mensaje de éxito y el médico creado.
   */
  async crearMedico(req: Request, res: Response) {
    try {
      const { tarjetaProfesional, nombre, apellido, consultorio, correo, especialidad } = req.body

      // Validación de campos vacíos
      if (Object.values({ tarjetaProfesional, nombre, apellido, consultorio, correo, especialidad }).some((value) => !value)) {
        return res.status(400).json({ message: "Debe completar todos los campos" })
      }

      // Verificación de si la tarjeta profesional ya está registrada
      const tarjetaRepeat = await this.prismaClient.medico.findFirst({
        where: { tarjetaProfesional: { equals: tarjetaProfesional } },
      })
      if (tarjetaRepeat) {
        return res.status(400).json({ message: "Esta tarjeta profesional ya existe" })
      }

      // Búsqueda de la especialidad del médico
      const especialidadM = especialidad.toUpperCase()
      const especialidadfind = await this.prismaClient.especialidad.findFirst({
        where: { nombre: { equals: especialidadM } },
      })
      if (!especialidadfind) {
        return res.status(404).json({ message: "Especialidad no encontrada" })
      }

      // Creación del nuevo registro de médico en la base de datos
      const medico = await this.prismaClient.medico.create({
        data: {
          tarjetaProfesional,
          nombre,
          apellido,
          consultorio,
          correo,
          /*Conecta la especialidad del médico a crear con la especialidad existente en la base de datos,
            utilizando el id de la especialidad encontrada en la búsqueda previa.,*/
          Especialidad: { connect: { idEspecialidad: especialidadfind.idEspecialidad } },
        },
      })
      return res.status(201).json({ message: "Creado con éxito", medico })
    } catch (error) {
      res.status(400).json({ message: "Error" })
      console.log(error)
    }
  }
}

export default MedicoController
