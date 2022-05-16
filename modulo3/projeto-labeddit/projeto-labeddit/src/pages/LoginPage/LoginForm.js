import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { InputsContainer } from './Styled'
import TextField from '@material-ui/core/TextField'
import { useNavigate } from 'react-router-dom'
import { Login } from '../../services/users'
import { CircularProgress } from '@material-ui/core'

const LoginForm = (props) => {

  const [form, onChange, clear] = useForm({email:"", password:"" })

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
      console.log(form)
    event.preventDefault()
    Login(form, clear, navigate, props.setRightButtonText, setIsLoading)
  }


  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
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
         {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Continuar</>}
        </Button>
        </form>
      </InputsContainer>
  )
}

export default LoginForm