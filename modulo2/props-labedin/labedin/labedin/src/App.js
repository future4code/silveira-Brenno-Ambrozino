import React from 'react';
import './App.css';
import styled from "styled-components";
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

const LittleCard = styled.div`
.littlecard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 5px 25px;
    margin-bottom: 2.5px;
    height: 50px;
}

.littlecard-container p {
    margin-bottom: 4px;
}

.littlecard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
}
`
const BigCard = styled.div`
.bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`
const ImgButton = styled.div`
.image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
}

.image-button-container > img {
    width: 30px;
    margin-right: 10px;
}
`
function App() {
  return (
    <div className="App">
      <BigCard className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= "https://scontent.fsdu35-1.fna.fbcdn.net/v/t39.30808-6/277175929_2172328176255046_1249421627625547537_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3u5zKeIKJyEAX-l3aOC&_nc_ht=scontent.fsdu35-1.fna&oh=00_AT81yybXhkfmbZNIAIql6mrXbHnb_kP5g3KXszhX6yeVyw&oe=62434279" 
          nome="Brenno Ambrozino" 
          descricao="Olá, eu sou o Brenno, sou estudante da Labenu, sou apaixonado por artes, 
          e uma das coisas que mais amo é admirar o belo."
        />
        
      </BigCard>

      <ImgButton>
      <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </ImgButton>

      <LittleCard className="page-section-container">
        <CardPequeno 
          email="E-mail: brennoambrozino@gmail.com"
        />
        <CardPequeno
          endereco="Endereço: Rio de Janeiro"
        />
      </LittleCard>

      <BigCard className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem=""
          nome="VP GENTE" 
          descricao="Voluntariado de ações sociais (02/2019 - 06/2020)" 
        />
      </BigCard>

      <ImgButton className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ImgButton>
    </div>
  );
}

export default App;
