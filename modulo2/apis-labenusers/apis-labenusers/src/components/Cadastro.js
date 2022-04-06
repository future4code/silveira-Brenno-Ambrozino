import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
`

export default class Cadastro extends React.Component {
  render() {
    return (
        <div>
            <button>Trocar de Tela</button>
            <Div>
                <input
                value=""
                onChange=""
                placeholder="Nome" 
                />
                <input
                value=""
                onChange=""
                placeholder="E-mail"
                />
                <button>Criar Usuário</button>
            </Div>
        </div>
        
    )
  }
}
