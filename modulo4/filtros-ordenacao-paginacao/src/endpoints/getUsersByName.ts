import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

export const getUsersByName = async(
    req:Request, 
    res:Response
    ): Promise<void> => {
    let errorCode:number = 400
    try {
        const table = "aula49_exercicio"

        let name = req.query.name as string

        if(!name){
            name = ""
        }

        const users = await connection.raw(`
            SELECT id, name, email, type FROM ${table}
            WHERE name LIKE '%${name}%'
        `)

        const result = users[0].map((user:any): user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                type: user.type
            }
        })

        if(!result.length) {
            errorCode = 404
            throw new Error("No users found");
        }

        res.status(200).send(result)

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)   
    }
}