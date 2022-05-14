import axios from 'axios'
import { goToFeedPage, goToLoginPage } from '../routes/coordinator'
import {BASE_URL} from '../constants/urls'

export const Login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeedPage(history)
      setRightButtonText("Logout")
    })
    .catch((err) => alert (err.response.data.message))
}

export const SignUp = (body, clear, history) => {
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
    alert ("Usuário Criado com sucesso! :)")
    clear()
    goToLoginPage(history)
})
  .catch((err) => alert (err.response.data.message))
}

