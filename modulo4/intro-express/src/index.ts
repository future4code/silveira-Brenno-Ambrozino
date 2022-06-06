import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1 

app.get('/', (req, res)=>{
    res.status(200).send('Hello from express')
})

// Exercício 2

type usuarios = {
    id:string;
    name:string;
    phone:number;
    email:string;
    website:string;
}

// Exercício 3

const arrayDeUsuarios:usuarios[] = [
    {
        id: "1",
        name: "Brenno" ,
        phone: 998,
        email:"brenno@gmail.com",
        website:"www.brenno.com",
    },
    {
        id: "2",
        name: "Karina" ,
        phone: 997,
        email:"karina@gmail.com",
        website:"www.karina.com",
    },
    {
        id: "3",
        name: "Leandro" ,
        phone: 996,
        email:"leandro@gmail.com",
        website:"www.leandro.com",
    },
    {
        id: "4",
        name: "Ryann" ,
        phone: 995,
        email:"ryann@gmail.com",
        website:"www.ryann.com",
    }
]

// Exercício 4

app.get('/usuarios', (req, res)=>{
    res.status(200).send(arrayDeUsuarios)
})

// Exercício 5 

type posts = {
    id:string;
    title:string;
    body:string;
    userId:string;
}

// Exercício 6

const arrayDePosts:posts[] = [
    {
        id: "1",
        title: "Brenno",
        body: "Oi, eu sou o Brenno",
        userId: "1"
    },
    {
        id: "2",
        title: "Karina",
        body: "Oi, eu sou a Karina",
        userId: "2"
    },
    {
        id: "3",
        title: "Leandro",
        body: "Oi, eu sou o Leandro",
        userId: "3"
    },
    {
        id: "4",
        title: "Ryann",
        body: "Oi, eu sou o Ryann",
        userId: "4"
    },
]

// Exercício 7

app.get('/posts', (req, res)=>{
    res.status(200).send(arrayDePosts)
})

// Exercício 8
app.get('/posts/:userId', (req, res)=>{

    let userId = req.params.userId

    const post:posts[] = arrayDePosts.filter((post) => {
        return post.userId === userId
    })

    res.status(200).send(post)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})