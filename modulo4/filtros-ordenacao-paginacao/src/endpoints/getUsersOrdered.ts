import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

export const getUsersOrdered = async(
    req:Request, 
    res:Response
    ): Promise<void> => {
    let errorCode:number = 400
    try {
        const table = "aula49_exercicio"

        let order = req.query.order as string
        let sort = req.query.sort as string

        if(!sort || !order){
            throw new Error("Please enter a valid 'sort' and 'order' values ");
            
        }

        sort = sort.toLocaleLowerCase() === "name"? "name": sort.toLocaleLowerCase() === "type"? "type": "email"
        order = order.toLocaleUpperCase() === "DESC"? "DESC": "ASC"

        const users = await connection(table)
            .orderBy(sort, order)

        const result = users.map((user:any): user => {
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