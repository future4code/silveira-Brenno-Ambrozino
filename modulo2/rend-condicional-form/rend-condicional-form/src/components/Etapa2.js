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

export default class Etapa2 extends React.Component {
  render() {
    return (
      <Container>
          <EtapaContainer>
            <h2>Etapa 2 - Informações do ensino superior</h2>
            <h4>5.Qual o curso?</h4>
            <Inputformulario></Inputformulario>
            <h4>6.Qual a unidade de ensino?</h4>
            <Inputformulario></Inputformulario>
          </EtapaContainer>
      </Container>
    )
  }
}
