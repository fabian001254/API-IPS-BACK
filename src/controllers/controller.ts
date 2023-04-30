import { PrismaClient } from "@prisma/client"

class Controller{
    public prismaClient:PrismaClient
    constructor(){
        this.prismaClient = new PrismaClient()
    }
}
export default Controller