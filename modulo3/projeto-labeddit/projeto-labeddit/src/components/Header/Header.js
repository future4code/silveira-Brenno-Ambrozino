import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Styled'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/coordinator'
import { goToLoginPage } from '../../routes/coordinator'

const Header = () => {
  
  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
        <Button onClick={()=>goToSignUpPage(history)} color="inherit">Cadastro</Button>
          <Button onClick={()=>goToLoginPage(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header