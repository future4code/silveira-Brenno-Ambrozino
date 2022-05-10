import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../Routes/coordinator';
import { useState } from 'react';
import axios from 'axios';
import Paises from '../Components/Paises';

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const [trip, setTrip] = useState();
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    const [texto, setTexto] = useState()
    const [profissao, setProfissao] = useState()
    const [viagem, setViagem] = useState()
    const [paises, setPaises] = useState()

    
    const getTrips = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trips").then(
        (res) => {
          setTrip(res.data);
        });
    };
    useEffect(() => {
      getTrips();
    }, []);

    const selectTrips = trip && trip.trips.map((trip) => {
      return (
        <option key={trip.id} value={trip.id}>{trip.name} </option>
      )
    })
    console.log(viagem)

    const onChangeNome = (event) =>{
      setNome(event.target.value)
    }
    const onChangeIdade = (event) =>{
      setIdade(event.target.value)
    }
    const onChangeTexto = (event) =>{
      setTexto(event.target.value)
    }
    const onChangeProfissao = (event) =>{
      setProfissao(event.target.value)
    }
    const onChangeViagem = (event) =>{
      setViagem(event.target.value)
    }
    const onChangePaises = (event) =>{
      setPaises(event.target.value)
    }

    
  const applyToTrip = () =>{
    const body = {
      name: nome,
      age: idade,
      applicationText:texto ,
      profession: profissao ,
      country: paises
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trips/${viagem}/apply`, body)
    .then((resposta) => {
      alert("Aplicação enviada com sucesso!")
    }).catch((error) => {
      console.log(error.message)
      alert("Ocorreu um erro :( Tente Novamente!")
    })
  }

  return (
    <div>
        <p>Inscreva-se para uma viagem</p>
        <select
        value={viagem}
        onChange={onChangeViagem} 
        >
          <option disabled selected>Escolha uma viagem</option>
          {selectTrips}
        </select>
        <input 
        type='text'
        placeholder='Nome'
        value={nome}
        onChange={onChangeNome}
        />
        <input 
        type='number'
        placeholder='Idade'
        value={idade}
        onChange={onChangeIdade}
        />
        <input 
        placeholder='Texto de Candidatura'
        value={texto}
        onChange={onChangeTexto}

        />
        <input 
        placeholder='Profissão'
        value={profissao}
        onChange={onChangeProfissao}

        />
        <Paises
        value={paises}
        onChange={onChangePaises}
        ></Paises>
        
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <button onClick={()=>applyToTrip(trip.id)}>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage;