import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../Routes/coordinator'
import { goBack } from '../Routes/coordinator'
import { goToCreateTripPage } from '../Routes/coordinator'
import { useState } from 'react'


export const useProtecedPage =()=>{
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if(token === null) {
      console.log('Não está logado!!')
      goToLoginPage(navigate)
    }
  },[navigate])
}

const AdminHomePage = () => {

  const [trip, setTrip] = useState();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trips").then(
      (res) => {
        setTrip(res.data);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  const deleteTrip =(id) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trips/${id}`, {
      headers: {
         auth: token
      }
    })        
    .then((res)=>{
    alert('acho q foi')
      console.log(res.data)
    }).catch((er)=>{
      console.log(er.res)
    })
  };

  useEffect(()=> {
    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno-ambrozino-silveira/trip/E1FP8JkqqGauXOYzGui0', {
      headers: {
        auth: token
      }
    })
    .then((res) =>{
      console.log("Deu Certo:", res.data)
    }).catch((er) =>{
      console.log('Deu erro:', er.res)
    })
  },[]);

  const goToTripDetailsPage = (id)=>{
    navigate(`/admin/trips/${id}`)
  }

  const listTrips = trip && trip.trips.map(
    (trip) =>{
      return <div key ={trip.id}>
        <button key={trip.id} onClick={()=>goToTripDetailsPage()} >{trip.name}</button>
        <button onClick={()=>deleteTrip(trip.id)}>x</button>
        </div>

    })
    
  return (
    <div>
      <p>Painel Amnistrativo</p>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToCreateTripPage(navigate) }>Criar Viagem</button>
      <button onClick={()=>goToLoginPage(navigate)}>Logout</button>
      <p>Viagens:</p>
      {listTrips}
    </div>
  )
}

export default AdminHomePage