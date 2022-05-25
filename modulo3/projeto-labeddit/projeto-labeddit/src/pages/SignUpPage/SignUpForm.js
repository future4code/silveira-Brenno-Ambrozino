import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { InputsContainer } from './Styled'
import TextField from '@material-ui/core/TextField'
import { SignUp } from '../../services/users'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const SignUpForm = () => {

  const [form, onChange, clear] = useForm({username: "", email:"", password:"" })
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    console.log(form)
    event.preventDefault()
    SignUp(form, clear, navigate, setIsLoading)
  }

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>

        <TextField 
        name={"username"}
        value={form.username}
        id={"outlined-basic"} 
        label={"Nome de Usuário"} 
        variant={"outlined"} 
        onChange={onChange}
        margin={"normal"}
        type={"text"}
        required
        fullWidth
        
        />
        <TextField 
        name={"email"}
        value={form.email}
        id={"outlined-basic"} 
        label={"E-mail"} 
        variant={"outlined"} 
        onChange={onChange}
        margin={"normal"}
        type={"email"}
        required
        fullWidth
        
        />
        <TextField 
        name={"password"}
        value={form.password}
        id={"outlined-basic"} 
        label={"Senha"} 
        variant={"outlined"} 
        onChange={onChange}
        margin={"normal"}
        type={"password"}
        required
        fullWidth
      
        />
        <Button 
        type={"submit"}
        variant={"contained"} 
        color={"primary"}
        fullWidth
        >
          {isLoading? <CircularProgress color={"inherit"} size={24}/> : <>Cadastrar</>}
        </Button>
        </form>
      </InputsContainer>
  )
}

export default SignUpForm