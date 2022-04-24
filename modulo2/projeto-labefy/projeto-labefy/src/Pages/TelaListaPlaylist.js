import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CardPlaylists = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
    display: flex;
`



export default class TelaListaPlaylist extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() { 
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        axios.get(url, {
            headers: {
                Authorization: "brenno-ambrozino-silveira"
            }
        })
        .then((res) => {
            this.setState({playlists: res.data.result.list })
        })
        .catch((err) => {
            // alert('Ocorreu um problema, tente novamente!')
        })

    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "brenno-ambrozino-silveira"
            }
        })
        .then((res) => {
            alert("Usuário(a) Deletado(a) com sucesso!")
            this.getAllPlaylists()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }

    

    render() {
        const listaPlaylists = this.state.playlists.map((play) => {
            return <CardPlaylists key={play.id}>
                    {play.name}
                    <button onClick={() => this.deletePlaylist(play.id)}>X</button>
                </CardPlaylists>
            })
    
        return (
            <div>
                <h2>Playlists</h2>
                {listaPlaylists}
            </div>
        )
    }
}
