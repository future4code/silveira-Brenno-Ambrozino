import React from 'react';
import axios from "axios";

export default class App extends React.Component {
  state = {
    users: [],
    inputName: ""
  }
  componentDidMount() {
    this.getAllUsers()
  }
  getAllUsers(){
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const headers = {
      headers: {
        Authorization: "brenno-ambrozino-silveira"
      }
    };
    axios
    .get(url, headers)
    .then((res) => {
      console.log(res.data.result.list);
      this.setState({
        users: res.data.result.list
      })

    })
    .catch((err) => {
      console.log(err.data);
    })
  }
  postUsers = () => {
    console.log(this.state.inputName);
  }
  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value
    })
  }
  render() {
    const componentsUsers =
    this.state.users.map((users) =>{
      return <li key={users.id}>{users.name}</li>
    })
    return (
      <div>
        <label>
          Novo Usuário:
          <input
          value={this.state.inputName}
          onChange={this.onChangeName}
          />
        </label>
        <button
        onClick={this.postusers}>Enviar</button>
        <ul> {componentsUsers} </ul>
      </div>
    )
  }
}
