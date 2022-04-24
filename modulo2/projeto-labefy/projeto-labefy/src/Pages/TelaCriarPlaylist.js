import React from 'react'
import axios from 'axios'

export default class TelaCriarPlaylist extends React.Component {
    state = {
        nome: ''
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    createPlaylist = () => {
        const url ='https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.nome
        }

        axios.post(url,body, {
            headers: {
                Authorization: 'brenno-ambrozino-silveira'
            }
        })

        .then((res) =>{
            alert('Nova playlist criada com sucesso!')
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
            <div>
                <h3>Criar Playlist</h3>
                <input
                placeholder='Nome'
                value={this.state.nome}
                onChange={this.onChangeNome}
                />
                <button onClick={this.createPlaylist}> Criar </button>
            </div>
        )  
    }
}
