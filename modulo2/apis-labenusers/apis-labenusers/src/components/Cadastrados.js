import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid black;
`

const Div = styled.div`
  display: flex;
`

export default class Cadastrados extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <button>Trocar de Tela</button>
          <li>
            <ul></ul>  
          </li>
        </Container>
        <h3>
          Procurar Usuário
        </h3>
        <Div>
          <input
          value=""
          onChange=""
          placeholder= "Nome exato para busca"
          />
          <button>Salvar edição</button>
        </Div>
      </div>
    )
  }
}
