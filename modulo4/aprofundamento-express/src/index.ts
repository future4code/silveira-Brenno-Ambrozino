import express, {Response, Request} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/ping", (req:Request, res:Response) => {
    res.send("Pong!")
})

// Exercício 2
type afazeres = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Exercício 3
const arrayAfazeres:afazeres[] = [
    {
        userId: 1,
        id: 11,
        title: "Varrer a casa",
        completed: true
    },
    {
        userId: 1,
        id: 21,
        title: "Passar pano na casa",
        completed: false
    },
    {
        userId: 2,
        id: 12,
        title: "Lavar a louça",
        completed: true
    },
    {
        userId: 2,
        id: 22,
        title: "Secar a Louça",
        completed: false
    },
]

// Exercício 4
app.get("/afazeres/:isCompleted", (req:Request, res:Response) => {
    let isCompleted:any = req.params.isCompleted

    if(isCompleted.toLowerCase() === "true") {
        const arrayTrue:afazeres[] = arrayAfazeres.filter((afazer) => {
            return afazer.completed === true
        })
        res.status(200).send(arrayTrue)


    } else if(isCompleted.toLowerCase() === "false") {
        const arrayFalse:afazeres[] = arrayAfazeres.filter((afazer) => {
            return afazer.completed === false
        })
        res.status(200).send(arrayFalse)
    }else {
        res.status(400).send("Insira 'true' ou 'false' como path param")
    }
})

// Exercício 5
app.post("/createAfazer", (req:Request, res:Response) => {
    const title = req.body.title
    const userId = req.body.userId

    const novoAfazer:afazeres = {
        userId: userId,
        id: Date.now(),
        title: title,
        completed: false
    } 

    arrayAfazeres.push(novoAfazer)

    res.status(200).send(arrayAfazeres)
})

// Exercício 6
app.put("/editStatus/:id", (req:Request, res:Response) => {

    const id:number = Number(req.params.id)

    for (let afazer of arrayAfazeres) {
        if(afazer.id === id){
            afazer.completed = !afazer.completed
        }
    }

    res.status(200).send(arrayAfazeres)
})

// Exercício 7
app.delete("/delete/afazer/:id", (req:Request, res:Response) => {
    const id = Number(req.params.id)

    for (let i = 0; i < arrayAfazeres.length; i++) {
        if (arrayAfazeres[i].id === id) {
            arrayAfazeres.splice(i, 1)
        }
    }

    res.status(200).send(arrayAfazeres)

})

// Exercício 8
app.get("/usersafazeres/:userId", (req:Request, res:Response) => {
    const userId:number = Number(req.params.userId)
    
    const afazeresUser = arrayAfazeres.filter((afazer) => {
        return afazer.userId === userId 
    })

    res.status(200).send(afazeresUser)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})