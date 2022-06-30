import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUsersByPages = async(
    req:Request, 
    res:Response
    ): Promise<void> => {
    let errorCode:number = 400
    try {
        const table = "aula49_exercicio"

        const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page): 1
        const size:number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size): 5
        
        const offset: number = size * (page - 1)

        const users = await connection(table)
        .limit(size)
        .offset(offset)

        res.status(200).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)   
    }
}