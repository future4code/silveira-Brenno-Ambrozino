import React from 'react'
import axios from 'axios'
import styled from 'styled-components'



export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: ""
  }

  handLeNome = (e) => {
    this.setState({nome: e.target.value})
  }

  handLeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    axios.post(url, body, {
      headers: {
        Authorization: "brenno-ambrozino-silveira"
      }
    })
    .then((res) => {
      alert('Usuário(a) cadastrado(a) com sucesso')
      this.setState({nome:"", email: ""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}> Ir para Lista de Usuários</button>
        <h2>Cadastro</h2>
        <input 
        onChange={this.handLeNome}
        value={this.state.nome}
        placeholder={"Nome"}/>
        <input 
        onChange={this.handLeEmail}
        value={this.state.email}
        placeholder={"E-mail"}/>
        <button onClick={this.fazerCadastro}>Cadastrar</button>
      </div>
    )
  }
}
