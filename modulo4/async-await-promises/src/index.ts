import axios from 'axios'
import { baseURL } from './baseURL'

type user = {
    id: string,
    name: string,
    email: string
}

type news = {
    title: string,
    content: string,
    date:number
}

const getSubscribers = async(): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res:any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

const getNews = async(): Promise<news[]> => {
    const response = await axios.get(`${baseURL}/news`)
    return response.data.map((res:any) => {
        return {
            title: res.title,
            content: res.content,
            date: res.date
        }
    })
}

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    })
}

const sendNotifications = async(
    users: user[],
    message: string
): Promise<void> => {
    try {
        const promises = users.map((user) => {
            return  axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })   
        })

        await Promise.all(promises)
    } catch {
        console.log("Error")
    }
}

// for (const user of users) {
//     await axios.post(`${baseURL}/notifications`, {
//         subscriberId: user.id,
//         message
//     })
//     console.log(`Notificação enviada para ${user.name}`)
// }

// console.log("All notifications sent")

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        // createNews("Bruna Karla Homofóbica", "Bruna Karla fala um monte de besteira e é endeusada", 444)
        const news = await getNews()
        // console.log(news)
        sendNotifications(subscribers, "inhaiii")
    } catch (err:any) {
        const response = err.reponse?.data || err.message
        return response
    }
}

main()