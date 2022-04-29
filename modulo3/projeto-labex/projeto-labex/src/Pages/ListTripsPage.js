import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../Routes/coordinator';
import { goToApplicationFormPage } from '../Routes/coordinator';

const ListTripsPage = () => {
    const navigate = useNavigate()

  return (
    <div>
        <p>Lista de Viagens</p>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>

    </div>
  )
}

export default ListTripsPage;