import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage } from '../Routes/coordinator'
import { goToLoginPage } from '../Routes/coordinator'

export const HomePage = () => {
    const navigate = useNavigate()

  return (
    <div>
        <p>LabeX</p>
        <button onClick={() => goToListTripsPage(navigate)} >Ver Viagens</button>
        <button onClick={() => goToLoginPage(navigate)} >Área de Admin</button>
    </div>
  )
}

