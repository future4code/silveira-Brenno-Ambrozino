import React from 'react'
import styled from 'styled-components';
import "./App.css"
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const Botao = styled.button`
  text-align: center;
  cursor: pointer;
  background-color: #b8b6b6;
  border-radius: 6px;
  width: 150px;
  height: 30px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    etapa : 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />  
    }
  }

  irParaProximaEtapa = () => {
    let valoratual = this.state.etapa
    let novovalor = valoratual + 1

    this.setState({etapa : novovalor})
  }

  
  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 && <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao>}
      </Container>
    )
  }
}

export default App;
