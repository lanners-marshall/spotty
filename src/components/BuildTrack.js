import React from 'react';
import { PlaylistDiv, FlexDiv, MakePlaylist, Btn } from './styles/build_css.js'
import axios from 'axios';

class BuildTrack extends React.Component {
	constructor(){
		super();
		this.state = {
			text: '',
			user_id: ''
		};

	}

	componentDidMount(){
		let token = localStorage.getItem('token')
		axios.get(
			'https://api.spotify.com/v1/me',
			 {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
		)
		.then(response => {
			// console.log(response.data)
			this.setState({
				user_id: response.data.id
			})
		})
		.catch(error => {
			console.log(error)
		})
	}

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	// POST /v1/me/playlists

 	makePlaylist = event => {
		event.preventDefault()
		let token = localStorage.getItem('token')
		let playlist = {"name": this.state.text, "public":true}
		console.log(token)
		axios.post(
			`https://api.spotify.com/v1/users/${this.state.user_id}/playlists`, playlist,
		  {headers: {
	        "Authorization": 'Bearer ' + token,
	        "Content-Type": "application/json"
	      }
	    }
		)
		.then(response => {
			this.setState({
				text: ''
			})
			console.log(response)
			this.setTracks(response.data.id, response.data.name )
		})
		.catch(error => {
			console.log(error)
		})
 	}

 	setTracks = (id, name) => {
 		let ar = []
 		let tracks = this.props.tracks
 		let token = localStorage.getItem('token')
 		for (let i in tracks){
 			ar.push("spotify:track:" + tracks[i].id)
 		}
 		let obj = {"uris": ar}
 		axios.post(
 			`https://api.spotify.com/v1/playlists/${id}/tracks`, obj,
 			{headers: {
	        "Authorization": 'Bearer ' + token,
	        "Content-Type": "application/json"
	      }
	    }
 		)
 		.then(response => {
 			console.log(response)
 			this.props.update(id, name)
 			this.props.clearTracks()
 		})
 		.catch(error => {
 			console.log(error)
 		})
 	}
 	
	render() {
		console.log(this.props)
		return (
			<FlexDiv>
				<PlaylistDiv>
					<h2>Built PLaylist</h2>
					{this.props.tracks.map((t, idx) => {
						return <p key={idx} id={t.id} onClick={this.props.remove}>{t.name}</p>
					})}
				</PlaylistDiv>
				<MakePlaylist>
					<h2>Submit Playlist to Spotify</h2>
					<form>
						<input
							type="text"
							placeholder='Playlist Name'
							onChange={this.handleChange}
							name="text"
							value={this.state.text}
						/>
					</form>
					<Btn onClick={this.makePlaylist}>Submit</Btn>
				</MakePlaylist>
			</FlexDiv>
		)
	}
}

export default BuildTrack;
