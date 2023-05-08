import { Response , Request } from "express"
import Controller from "./controller"
import * as jsonSchema from "../json-schema.json"

type jsonSchema = Record<string,any>

class FormularioController extends Controller{
    obtenerDefinicion(req:Request, res:Response){
        //Extraer nombre
        const{ formulario } = req.params    
        const esquemaJson: jsonSchema = jsonSchema
        if(esquemaJson.definitions[formulario]){
            res.json(esquemaJson.definitions[formulario])
        }else{
            res.status(400).json({ message: `Error no se encontro ${formulario} ` })
        }
    }
}
export default FormularioController