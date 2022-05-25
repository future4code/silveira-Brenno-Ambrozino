import axios from 'axios'
import { goToFeedPage, goToLoginPage } from '../routes/coordinator'
import {BASE_URL} from '../constants/urls'

export const Login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/login`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    setIsLoading(false)
    goToFeedPage(navigate)
    setRightButtonText("Logout")
  })
  .catch((err) => {
    setIsLoading(false)
    alert (err.response.data.message)
  })
}

export const SignUp = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
    alert ("Usuário Criado com sucesso! :)")
    clear()
    setIsLoading(false)
    goToLoginPage(navigate)
  })
  .catch((err) => {
    setIsLoading(false)
    alert(err.response.data.message)
  })
}

