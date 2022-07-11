import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export const insertAddressDb = async (address:Address) => {
    const {cep, logradouro ,complemento, bairro, cidade, estado} = address

    await connection("address").insert({
        cep,
        logradouro,
        complemento,
        bairro,
        cidade, 
        estado
    })
}