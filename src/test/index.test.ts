/*
import Request  from "supertest"
import App from "../src/App"

describe(
    "GET /",
    ()=>{

        let app:App

        beforeAll(
            ()=>{
                app = new App()
                app.start()
            }
        )

        afterAll(
            ()=>{
                app.close()
            }
        )

        test(
            "Devolver mensaje",
            async ()=>{
                const res = await Request(app.app).get("/")
                expect(res.statusCode).toEqual(200)
                expect(res.text).toEqual("Bienvenido")
            }

        )

    }
)*/