import React from 'react';
import {MeDiv, PlayLists, PersonalDiv, FlexDiv, ResFlex, H2Center} from './styles/meInfo_css.js'
import axios from 'axios';
import './styles/custom.css'

class MeInfo extends React.Component {
	constructor(){
		super();
		this.state = {
			songs: [],
			track: '',
		};
	}

	componentDidMount(){}

	getSongs = event => {
		event.preventDefault()
		console.log(event.target.id)
		let track = event.target.id
    let token = localStorage.getItem('token')
    axios.get(
      `https://api.spotify.com/v1/playlists/${event.target.id}/tracks`,
      {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
    )
    .then(response => {
      // console.log(response.data.items)
      this.setState({
        songs: response.data.items,
        track: track
      })
      
    })
    .catch(error => {
      console.log(error.response)
    })
    
	}

	render() {
		let url, pic_url, total, play_url
		if (this.props.me){
			url = this.props.me.images[0].url
			pic_url = this.props.me.external_urls.spotify
			total = this.props.me.followers.total
		}
		if (this.props.playlists){
			play_url = `https://open.spotify.com/embed/playlist/${this.props.playlists[0].id}`
		}
		let track = `https://open.spotify.com/embed/playlist/${this.state.track}`

		return (
			<MeDiv>
				<FlexDiv>
					<PersonalDiv>
						<ResFlex>
							<a href={pic_url}><img src={url} alt="personal pic" className="pic"/></a>
							<h2>
								Country - {this.props.me.country}<br/>
								{this.props.me.display_name}<br />
								followers - {total}<br /><br />
								
							</h2>
						</ResFlex>
						<H2Center>PlayLists:</H2Center>
						<PlayLists>
							{this.props.playlists ? (
								this.props.playlists.map(n => {
									return <p key={n.id} id={n.id} onClick={this.getSongs}>{n.name}</p>
								})
							) : null }
						</PlayLists>
					</PersonalDiv>
					{this.state.track ? (
						<iframe src={track} title="track" className="tracks" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
					) : 
						<iframe src={play_url} title="track" className="tracks" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
					}
					
					
				</FlexDiv>
			</MeDiv>
		)
	}
}

export default MeInfo;