import axios from 'axios'
import React, { useState } from 'react'
import Planetas from '../Components/Planetas'
import useProtecedPage from './AdminHomePage'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/coordinator'

const CreateTripPage = () => {
  useProtecedPage()

  const navigate = useNavigate()

  const [nome, setNome] = useState()
  const [planeta, setPlaneta] = useState()
  const [data, setData] = useState()
  const [descricao, setDescricao] = useState()
  const [dias, setDias] = useState()
  

  const onChangeNome =(e)=>{
    setNome(e.target.value)
  }

  const onChangePlaneta =(e)=>{
    setPlaneta(e.target.value)
  }

  const onChangeData =(e)=>{
    setData(e.target.value)
  }

  const onChangeDias =(e)=>{
    setDias(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const createTrip =()=>{
    
    const token = localStorage.getItem("token");
    const body = 
      {
        name: nome,
        planet: planeta,
        date: data,
        description: descricao,
        durationInDays: dias
      }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trips', body, {
      headers:{
        auth: token
      }
    })
    .then((res) =>{
      console.log("Deu certo:", res.data)
      alert("Viagem adicionada com sucesso!")
    }).catch((er) =>[
      console.log("Deu errado:", er.res)
    ])
  }
  return (
    <div>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
      <p>Criar Viagem</p>
      <input
      placeholder='nome'
      value={nome}
      onChange={onChangeNome}
      ></input>
      <Planetas
      value={planeta}
      onChange={onChangePlaneta}
      >
      </Planetas>
      <input
      type='date'
      value={data}
      onChange={onChangeData}
      ></input>
      <input
      type='text'
      placeholder='Descrição'
      value={descricao}
      onChange={onChangeDescricao}
      >
      </input>
      <input
      placeholder='Duração de Dias'
      type='number'
      value={dias}
      onChange={onChangeDias}
      ></input>
      <button onClick={createTrip} >Criar</button>
    </div>
  )
}

export default CreateTripPage