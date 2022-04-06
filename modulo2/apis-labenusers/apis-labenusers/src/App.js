import React from 'react';
import axios from "axios";

export default class App extends React.Component {
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
      console.lo(res.data)
    })
    .catch((err) => {
      console.log(err.data);
    })
  }
  render() {
    this.getAllUsers()
    return (
      <div></div>
    )
  }
}
