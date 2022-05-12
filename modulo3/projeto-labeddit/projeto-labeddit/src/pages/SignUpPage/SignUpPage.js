import React from 'react'
import { ScreenContainer } from './Styled'
import { useHistory } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'

const SignUpPage = () => {

  const history = useHistory()

  useUnProtectedPage()

  return (
    <ScreenContainer>
      <h2>Olá, boas vindas ao LabEddit ;) </h2>
      <p>O projeto de rede social da Labenu</p>
      <SignUpForm/>

    </ScreenContainer>
  )
}

export default SignUpPage