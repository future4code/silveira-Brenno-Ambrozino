import { Request, Response } from 'express'
import { getFullAddress } from '../services/getFullAddress'

export const getAddress = async (req: Request, res:Response) => {
    try {
        const cep = req.params.cep
        
        const address = await getFullAddress(cep)
        res.send(address)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}
