import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/coordinator'

const LoginPage = () => {
    const navigate = useNavigate()

  return (
    <div>
        <p>Login</p>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <button>Entrar</button>
    </div>
  )
}

export default LoginPage