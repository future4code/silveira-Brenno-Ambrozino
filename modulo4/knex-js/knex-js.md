## Exercício 1
---
a) um objeto com todas as informações requisitadas
#
b) Função que busca um ator pelo nome:
````ts
const searchActor = async(name:string) : Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}
````
#
c) Função que recebe um ``gender`` e retorna a quantidade de itens na tabela ``Actor`` com esse ``gender``:

````ts
const countActors = async (gender: string): Pomise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count;
    return count;
}
````
#

## Exercício 2
---

a) Função que recebe um salário e um id e realiza a atualização do salário do ator em questão:
````ts
const updateActor = async (id:string, salary: number): Promise<any> => {
    await connection("Actor")
    .update({
        salary: salary,
    }) 
    .where("id", id);
}
````
#
b) Função que recebae um id e delete um ator da tabela:
````ts
const deleteActor = async (id:string) : Promise<void> => {
    await connection("Actor")
    .delete()
    .where("id", id);
}
````
#
c) Função que recebe um ``gender`` e devolve a média dos salários de atrizes ou atores desse ``gender``
````ts
const avgSalary = async (gender: string) : Promise<any> => {
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})

    return result[0].average
}
````
#

## Exercício 3
---
a)
````ts
app.get("actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await connection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"
        `)

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({message: err.message})
    }
}
)
````
#

b)

````ts
app.get("/actor", async (req:Request, res:Response) => {
    try {

        const count = await countActors(req.query.gender as string);
        res.status(200).send({quantity: count})


    } catch (err) {
        res.status(400). send({message: err.message})
    }
} )
````
#

## Exercício 4
---

a)
````ts
app.get("/actor", async (req: Request, res: Response) => {
    try{
        await updateSalary(req.body.id, req.body.salary)
        res.status(200).send({message:"success"})
    } catch (err) {
        res.status(400).send({message: err.message})
    }
} )
````
b)
````ts
app.delete("/actor/:id", async (req:Request, res:Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send({message: "Success"})
    } catch(err) {
        res.status(400).send({ message: err.message})
    }
})
````