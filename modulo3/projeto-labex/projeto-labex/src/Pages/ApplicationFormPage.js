import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../Routes/coordinator';

const ApplicationFormPage = () => {
    const navigate = useNavigate()

  return (
    <div>
        <p>Inscreva-se para uma viagem</p>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage;