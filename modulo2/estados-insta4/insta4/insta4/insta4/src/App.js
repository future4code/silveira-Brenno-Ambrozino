import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  
  state = {
    posts: [
      {
        nomeUsuario:'brenno_ambrozino',
        fotoUsuario:'https://scontent.fsdu35-1.fna.fbcdn.net/v/t39.30808-6/277175929_2172328176255046_1249421627625547537_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=62EGpX-_WYAAX8Vx_Sn&_nc_ht=scontent.fsdu35-1.fna&oh=00_AT_kBEZEmCp1s9RLzk9tkB3uJYUJy0-pSFfpPEalj_IXIA&oe=62453CB9',
        fotoPost:'https://scontent.fsdu35-1.fna.fbcdn.net/v/t39.30808-6/277175547_2172330849588112_1264085750058227865_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=_HKVVy5Az4UAX-aRgpk&_nc_ht=scontent.fsdu35-1.fna&oh=00_AT8-dd9SCKkaAG4Z4fKFVzsxFUU1V_-W5pKVnt9WpO3jVQ&oe=62454E5D'
      },

      {
        nomeUsuario:'nikgopi',
        fotoUsuario:'https://scontent.fsdu35-1.fna.fbcdn.net/v/t39.30808-6/247543577_4514099161979445_1784263411379865629_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=N6wFVsNxFwcAX9CGEdZ&tn=n8aVTJqvHLwDhorh&_nc_ht=scontent.fsdu35-1.fna&oh=00_AT-VICSmTfEOaYSLWFMzNaUQ-mk5vhRGlA9ZZmFiGEpLBQ&oe=62464F3B',
        fotoPost:'https://scontent.fsdu35-2.fna.fbcdn.net/v/t39.30808-6/274729507_4956694024386621_2423984354826757878_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=SyzGzngBc80AX-6LI7t&_nc_ht=scontent.fsdu35-2.fna&oh=00_AT_h7NUGryvs3DgJXtEByN8R3jkKQR4WYv_elnNT522hlw&oe=6246AFA3'
      },

      {
        nomeUsuario:'rmilanez_',
        fotoUsuario:'https://scontent.fsdu35-2.fna.fbcdn.net/v/t31.18172-8/21318879_904042423078322_6928001660868341959_o.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-5&_nc_sid=da31f3&_nc_ohc=vEqRDhNiBDUAX8vcG3T&_nc_ht=scontent.fsdu35-2.fna&oh=00_AT-ss21pCLnJicJUs7UKznZeHoqfSNXq1hK_7fi88dGAPQ&oe=62676C2A',
        fotoPost:'https://scontent.fsdu35-1.fna.fbcdn.net/v/t1.18169-9/21271221_904040249745206_2282141866540418141_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=CR__p41QKAUAX-IcIig&_nc_ht=scontent.fsdu35-1.fna&oh=00_AT_BLCywOqnYvsmcMWmukXjf4qC1168_PLdlrOzubkUJsg&oe=6267DBBB'
      }
    ]
  }
  render() {

    const posts = this.state.posts.map((post) => {
      return(
        <Post>
          {post.nomeUsuario}
          {post.fotoUsuario}
          {post.fotoPost}
        </Post>
      )
    })

    return (
      <MainContainer>
        {posts}
        
      </MainContainer>
    );
  }
}

export default App;
