import { arrayUsers, UsersType, users } from './data'
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req:Request, res:Response) => {
    let errorCode:number = 400
    try{

        let type:string = req.query.type as string
        let name: string = req.query.name as string

        if(type) {
            type = type.toUpperCase()
            if(type in UsersType){
                const typeKey = arrayUsers.filter((user) => user.type === type)
                res.status(200).send(typeKey)
            } else {
                errorCode = 422
                throw new Error("Type não encontrado")
            }
        } 

        if(name) {
            name = name.toLowerCase()
            const nameKey = arrayUsers.filter((user) => {
                user.name.toLowerCase() === name
            })
            
            if (nameKey.length === 0) {
                errorCode
                throw new Error('Name não encontrado')
            }
        }


        res.status(200).send(arrayUsers)
    } catch(error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/users", (req:Request, res:Response) => {
    let errorCode:number = 400
    try{
        const {name, email, age} = req.body
        let type:string = req.body.type.toUpperCase() as string

        if(!(type in UsersType)) {
            errorCode = 422
            throw new Error("Type inválido")
        }

        if(!name || !email || !age || !type) {
            errorCode = 422
            throw new Error("Alguma das requisições não foram passadas no body")
        }

        if (typeof name !== "string") {
            errorCode = 422
            throw new Error("O name deve ser string")
        }

        if (typeof email !== "string") {
            errorCode = 422
            throw new Error("O email deve ser string")
        }

        if (typeof age !== "number") {
            errorCode = 422
            throw new Error("O age deve ser number")
        }

        if (typeof type !== "string") {
            errorCode = 422
            throw new Error("O type deve ser string")
        }

        const newUser:users = {
            id: arrayUsers.length + 1,
            name,
            email,
            type: type === UsersType.ADMIN ? UsersType.ADMIN : UsersType.NORMAL,
            age
        }
        arrayUsers.push(newUser)

        res.status(201).send(arrayUsers)
    } catch(error:any) {
        res.status(errorCode).send(error.message)
    }
    
} )


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
