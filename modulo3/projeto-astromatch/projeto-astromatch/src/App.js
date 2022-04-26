import React, {useEffect, useState} from 'react'
import axios from 'axios'
import TelaInicial from './components/Pages/TelaInicial';



function App() {
  const [profileToChoose, setProfileToChoose] = useState([]);

    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
            .then(response => {
                setProfileToChoose(response.data.profile)
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])
  return (
    <div >
      {profileToChoose}
      oi
    </div>
  );
}

export default App;
