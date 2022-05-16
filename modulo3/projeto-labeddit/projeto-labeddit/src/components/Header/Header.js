import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToBack, goToLoginPage } from '../../routes/coordinator'

const Header = (props) => {
  
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      props.setRightButtonText("Login")
      goToLoginPage(navigate)
    } else {
      goToLoginPage(navigate)
    }
  }

  const leftButtonAction = () => {
    goToBack(navigate)
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={leftButtonAction} color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{props.rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header