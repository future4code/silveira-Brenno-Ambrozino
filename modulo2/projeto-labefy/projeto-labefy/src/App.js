import React from 'react'
import TelaListaPlaylist from './Pages/TelaListaPlaylist'
import TelaCriarPlaylist from './Pages/TelaCriarPlaylist'

export default class App extends React.Component {
  render() {
    return (
      <div>
          <TelaListaPlaylist/>
          <TelaCriarPlaylist/>

      </div>
    )
  }
}
