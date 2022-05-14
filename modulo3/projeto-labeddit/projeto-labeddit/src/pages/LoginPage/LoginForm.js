import React from 'react'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import { InputsContainer } from './Styled'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import { Login } from '../../services/users'

const LoginForm = (props) => {

  const [form, onChange, clear] = useForm({email:"", password:"" })

  const history = useHistory()

  const onSubmitForm = (event) => {
      console.log(form)
    event.preventDefault()
    Login(form, clear, history, props.setRightButtonText)
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
          Continuar
        </Button>
        </form>
      </InputsContainer>
  )
}

export default LoginForm