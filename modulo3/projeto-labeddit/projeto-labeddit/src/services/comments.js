import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const CreateCommentVote = (id) => {
    axios.post(`${BASE_URL}/comments/${id}/votes`, {"direction": 1}, {
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

export const ChangeCommentVote = (id) => {
  axios.put(`${BASE_URL}/comments/${id}/votes`, {"direction": -1}, {
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

export const DeleteCommentVote = (id) => {
  axios.delete(`${BASE_URL}/comments/${id}/votes`, {
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
  