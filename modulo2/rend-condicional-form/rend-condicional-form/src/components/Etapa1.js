import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
`;

const EtapaContainer = styled.div`
  border: 1px solid white;
  height: 500px;
  width: 500px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b8b6b6;
  flex-direction: column;
`;

const Inputformulario = styled.input`
    width: 120px;
    height: 20px;
    border: 1px solid gray;
`

const Selecao = styled.select`
    width: 175px;
    height: 25px;
    border: 1px solid gray;
`

export default class Etapa1 extends React.Component {
  render() {
    return (
        <Container>
            <EtapaContainer>
                <h2>Etapa 1 - Dados Gerais</h2>
                <h4>1.Qual o seu nome?</h4>
                <Inputformulario></Inputformulario>
                <h4>2.Qual a sua idade?</h4>
                <Inputformulario></Inputformulario>
                <h4>3.Qual seu e-mail?</h4>
                <Inputformulario></Inputformulario>
                <h4>4.Qual a sua escolaridade?</h4>
                <Selecao>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </Selecao>
            </EtapaContainer>
        </Container>
    )
  }
}
