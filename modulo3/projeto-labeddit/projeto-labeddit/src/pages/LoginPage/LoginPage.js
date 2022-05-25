import React from 'react'
import Button from '@material-ui/core/Button'
import { ScreenContainer } from './Styled'
import { SignUpBottomContainer } from './Styled'
import { goToSignUpPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import useUnProtectedPage  from '../../hooks/useUnProtectedPage'

const LoginPage = (props) => {

  const navigate = useNavigate()
  useUnProtectedPage()

  return (
    <ScreenContainer>
      <h1>LabEddit</h1>
      <p>O projeto de rede social da Labenu</p>
      <LoginForm rightButtonText={props.rightButtonText} setRightButtonText={props.setRightButtonText}/>
      <SignUpBottomContainer>
        <Button 
        variant={"outlined"} 
        color={"primary"}
        type={"submit"}
        onClick={() => goToSignUpPage(navigate) }
        fullWidth
        >
          Crie uma Conta!
        </Button>
      </SignUpBottomContainer>
    </ScreenContainer>
  )
}

export default LoginPage