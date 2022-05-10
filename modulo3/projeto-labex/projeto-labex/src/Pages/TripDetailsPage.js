import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/coordinator'
import { useProtecedPage } from './AdminHomePage'

const TripDetailsPage = () => {
  useProtecedPage()
  const params = useParams()
  const navigate = useNavigate()

  const [trip, setTrip] = useState();

    const getTrips = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trips").then(
        (res) => {
          setTrip(res.data);
        });
    };

    useEffect(() => {
      getTrips();
    }, []);

    const titulo = trip && trip.trips
    .filter((trip)=>(params.id === trip.id))
    .map((trip) =>{
              return <div key ={trip.id}>
                  <h1 key={trip.name}>{trip.name}</h1>
                  </div> 
    })

    const detalhes = trip && trip.trips
    .filter((trip)=>(params.id === trip.id))
    .map(
      (trip) =>{
        return <div key ={trip.id}>
          <p key={trip.name}>Nome: {trip.name}</p>
          <p key={trip.description}>Descrição: {trip.description}</p>
          <p key={trip.planet}>Planeta: {trip.planet}</p>
          <p key={trip.durationInDays}>Duração: {trip.durationInDays} dias</p>
          <p key={trip.date}>Data: {trip.date}</p>
          </div>

      })

  return (
    <div>
     <h1>{titulo}</h1>
     {detalhes}
     <button onClick={()=>goBack(navigate)}>Voltar</button>
     <p>Candidatos Pendentes:</p>
     <p>Candidatos Aprovados:</p>
    </div>
  )
}

export default TripDetailsPage