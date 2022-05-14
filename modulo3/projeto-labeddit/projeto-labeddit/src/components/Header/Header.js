import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Styled'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../../routes/coordinator'

const Header = (props) => {
  
  const history = useHistory()

  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      props.setRightButtonText("Login")
      goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{props.rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header