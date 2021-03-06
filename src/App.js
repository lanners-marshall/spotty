import React, { Component } from 'react';
import SpotifyLogin from 'react-spotify-login';
import axios from 'axios'
import MeInfo from './components/MeInfo'
import Search from './components/Search'
import github from './components/images/github.png'
import './components/styles/custom.css'
import {Banner,Spacing, Container, Spotiy, SpotiyDiv, Logout} from './app_css.js'

require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state = {
      accessToken: '',
      meInfo: '',
      playlists: '',
    };
  }

  componentDidMount(){}

  onSuccess = response => {
    // console.log(response)
    localStorage.setItem('token', response.access_token)
    this.setState({
      accessToken: localStorage.getItem('token')
    })
    this.getInfo() 
    this.getPlayList()
  }
  onFailure = response => {
    console.error(response)
  }

  logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  getInfo = () => {
    let token = localStorage.getItem('token')
    axios.get(
      'https://api.spotify.com/v1/me',
      {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
    )
    .then(response => {
      // console.log(response)
      this.setState({
        meInfo: response.data
      })
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  getPlayList = () => {
    let token = localStorage.getItem('token')
    axios.get(
      'https://api.spotify.com/v1/me/playlists',
      {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
    )
    .then(response => {
      // console.log(response.data.items)
      this.setState({
        playlists: response.data.items
      })
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  upDatePlayLists = (id, name) => {
    let obj = {name: name, id: id}
    this.setState({
      playlists: [obj, ...this.state.playlists]
    })
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <Banner>
          <a href="https://github.com/lanners-marshall/spotty"><img src={github} alt="github" className='github'/></a>
        </Banner>
        <Spacing/>
        <Container>
          <Spotiy>
            Spotty
          </Spotiy>
          <SpotiyDiv>
            <div>
              <h1>Hi. This is Spotty</h1>
              <p>Look up music, play, & build playlists for Spotify</p>
            </div>
            <div>
              <SpotifyLogin clientId={process.env.REACT_APP_API_KEY}
                redirectUri={process.env.REACT_APP_API_URL}
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                className="spotify"
                scope="playlist-modify-public"
                buttonText='Sign In to Spotify'
              />
              <Logout onClick={this.logOut}>
                Log Out
              </Logout>
            </div>
          </SpotiyDiv>

          {this.state.accessToken ? (
            <div>
              <MeInfo me={this.state.meInfo} playlists={this.state.playlists}/>
              <Search update={this.upDatePlayLists}/>
            </div>
            ) :
            null
          }

          <Spacing/>
        </Container>
      </div>
    );
  }
}

export default App;