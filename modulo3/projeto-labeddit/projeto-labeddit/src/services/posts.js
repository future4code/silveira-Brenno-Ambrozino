import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const CreatePost = (body, clear, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts`,body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    alert(res.data)
    clear()
    setIsLoading(false)
  })
  .catch((err) => {
    setIsLoading(false)
    alert (err.response.data.message)
  })
}

export const CreateComment = (id, body, clear,setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts/${id}/comments `,body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    alert(res.data)
    clear()
    setIsLoading(false)
  })
  .catch((err) => {
    setIsLoading(false)
    alert (err.response.data.message)
  })
}

export const CreatePostVote = (id) => {
  axios.post(`${BASE_URL}/posts/${id}/votes`, {"direction": 1}, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.response.data)
  })
}

export const ChangePostVote = (id) => {
  axios.put(`${BASE_URL}/posts/${id}/votes`, {"direction": -1}, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err.response.data)
  })
}
