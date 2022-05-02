import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/coordinator'
import axios from 'axios'
import { goToAdminHomePage} from '../Routes/coordinator'

const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const onChangeEmail = (e) =>{
      setEmail(e.target.value)
    }

    const onChangeSenha =(e)=>{
      setSenha(e.target.value)
    }

    const Login =()=>{
      const body = {
        email: email,
        password: senha 
      }
      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/login', body)
      .then((res) =>{
        console.log('Deu certo:', res.data)
        localStorage.setItem('token', res.data.token)
        goToAdminHomePage(navigate)
      }).catch((er) =>{
        alert('Usuário não encontrado :(')
      })
    }

  return (
    <div>
        <p>Login</p>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <input 
        placeholder='email'
        type='email'
        value={email} 
        onChange={onChangeEmail}
        />
        <input 
        placeholder='senha'
        type='password'
        value={senha} 
        onChange={onChangeSenha}
        />
        <button onClick={Login}>Entrar</button>
    </div>
  )
}

export default LoginPage