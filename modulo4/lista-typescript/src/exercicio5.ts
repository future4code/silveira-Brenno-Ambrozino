type contas = {
    name: string;
    email: string;
    role: string;
}

enum ROLE {
    USER = "user",
    ADMIN = "admin"
}

const arrayContas: contas[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 


const emailAdmin = (array:contas[]) => {
    const emails:string[] = array.filter((conta) => {
        return conta.role === ROLE.ADMIN
    }).map((conta) => {
        return conta.email
    })
    return emails 
}

console.log(emailAdmin(arrayContas))