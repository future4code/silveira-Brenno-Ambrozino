import express, {Request, Response} from 'express'
import cors from 'cors'
import { arrayProdutos } from './data'
import { produtos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/teste", (req:Request, res:Response) => {
    res.status(200).send("A API está funcionando")
} )

// Exercício 3 e 7
app.post("/criar", (req:Request, res:Response) => {
    try{
        const name:string = req.body.name
        const price= req.body.price
        const id = Number(arrayProdutos[arrayProdutos.length - 1].id) + 1

        if(!name || !price) {
            throw new Error("O nome e o preço são necessários") 
        }

        if(typeof name !== "string" || typeof price !== "number") {
            throw new Error("O nome e o preço precisam ser, respectivamente, string e number")

        }

        if(price <= 0) {
            throw new Error("O preço deve ser maior que zero")
        }
    
        const novoProduto:produtos = {
            id: `${id}`,
            name: name,
            price: price
        }
    
        arrayProdutos.push(novoProduto)
        res.status(201).send("Produto criado com sucesso")

    } catch (error:any) {
        res.status(422).send(error.message)
    }

})

// Exercício 4 
app.get("/produtos", (req:Request, res:Response) => {
    res.status(200).send(arrayProdutos)
})

// Exercício 5 e 8
app.put("/editar/:id", (req:Request, res:Response) => {
    try {
        const id:string = req.params.id
        const newPrice = req.body.newPrice

        if (!newPrice) {
            res.statusCode = 422
            throw new Error("O novo preço é obrigatório nessa requisição")
        } else if(typeof newPrice !== "number") {
            res.statusCode = 422
            throw new Error("O novo preço deve ser do tipo 'number' ")
        } else if (newPrice <= 0) {
            res.statusCode = 422
            throw new Error("O novo preço deve ser maior  que '0' ")
        } else if (!id) {
            res.statusCode = 422
            throw new Error("O id é obrigatório nessa requisição")
        }

        const idError = arrayProdutos.findIndex((produto) => {
            produto.id === id
        })

        if(idError < 0) {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }

        for(let produto of arrayProdutos) {
            if(produto.id === id) {
            produto.price = newPrice
            }
        }

        res.status(200).send(arrayProdutos)

    } catch (error:any) {
        res.status(500).send(error.message)
    }
} )

// Exercício 6 e 9 
app.delete("/deletar/:id", (req:Request, res:Response) => {

    try {
        const id= req.params.id

        if(!id) {
            res.statusCode = 422
            throw new Error("O id é obrigatório nessa requisição")
        }

        const idDelError = arrayProdutos.findIndex((produto) => {
            produto.id === id
        })

        if(idDelError < 0) {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }

        for (let i = 0; i < arrayProdutos.length; i++) {
            if(arrayProdutos[i].id === id) {
                arrayProdutos.splice(i,1)
            }
        }

        res.status(200).send(arrayProdutos)

    } catch(error:any) {
        res.status(500).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")    
})