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

export default class Final extends React.Component {
  render() {
    return (
      <Container>
          <EtapaContainer>
              <h1>O Formulário Acabou</h1>
              <h3>Muito obrigado por participar! Entraremos em contato.</h3>
          </EtapaContainer>
      </Container>
    )
  }
}
