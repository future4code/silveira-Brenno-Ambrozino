import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../Routes/coordinator';
import { goToApplicationFormPage } from '../Routes/coordinator';
import { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const ListTripsPage = () => {
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
    const listTrips = trip && trip.trips.map(
      (trip) =>{
        return <Card key ={trip.id}>
          <li key={trip.name}>Nome: {trip.name}</li>
          <li key={trip.description}>Descrição: {trip.description}</li>
          <li key={trip.planet}>Planeta: {trip.planet}</li>
          <li key={trip.durationInDays}>Duração:{trip.durationInDays}</li>
          <li key={trip.date}>Data: {trip.date}</li>
          </Card>

      })
    
  return (
    <div>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>
        <p>Lista de Viagens</p>
        <ul>{listTrips}</ul>

    </div>
  )
}

export default ListTripsPage;