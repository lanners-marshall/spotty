import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import './styles/custom.css'
import no_pick from './images/noimage.jpeg'
import {SearchDiv, DisplaySearch, Flex, OverFlow, DisplayDiv, DisplayDivInner, SongDiv, AddSpan, Pagination} from './styles/search_css.js'

const options = [
  { value: 'artist', label: 'artist' },
  { value: 'album', label: 'album' },
  { value: 'track', label: 'track' },
  { value: 'playlist', label: 'playlist' }
];


class Search extends React.Component {
	constructor(){
		super();
		this.state = {
			text: '',
			option: '',
			artists: '',
			albums: '',
			tracks: '',
			playlists: '',
			artistsAlbums: '',
			albumSongs: [],
      currentPage: 1,
      SongsPerPage: 5,
		};
	}

	componentDidMount(){}

	handleChange = event => {
 	  this.setState({[event.target.name]: event.target.value})
 	}

 	handleChange2 = (selectedOption) => {
    this.setState({ 
    	option: selectedOption.value 
    });
  }

  lookUp = event => {
  	event.preventDefault()
  	let newText = this.state.text
  	newText = newText.trim()
  	newText = newText.split(" ")
  	let token = localStorage.getItem('token')
  	let str = ''
  	if (newText.length > 1){
  		for (let i in newText){
  			str += newText[i] + '+'
  		}
  		str = str.slice(0, -1);
  		console.log(str)
  	} else {
  		str = newText[0]
  	}
  	axios.get(
      `https://api.spotify.com/v1/search?q=${str}&offset=0&limit=20&type=${this.state.option}`,
      {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
    )
    .then(response => {
    	console.log(response.data)

    	if (response.data.artists) {
    		let ar = []
    		let obj, img
    		let items = response.data.artists.items
    		for (let i in items){
    			if (items[i].images.length > 0){
    				img = items[i].images[0].url
    			} else {
    				img = no_pick
    			}
    			obj = {name: items[i].name, image: img, id: items[i].id}
    			ar.push(obj)
    		}
    		// console.log(ar)
    		this.setState({
    			artists: ar,
		    	text: '',
					albums: '',
					tracks: '',
					playlists: '',
					artistsAlbums: '',
					albumSongs: [],
    		})

    	}

    })
    .catch(error => {
    	console.log(error)
    })
  }

  artistsAlbums = event => {
  	event.preventDefault()
  	// console.log(event.target.id)
  	let token = localStorage.getItem('token')
  	axios.get(
      `https://api.spotify.com/v1/artists/${event.target.id}/albums`,
      {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
    )
    .then(response => {
    	console.log(response.data)
    	let ar = []
    	let obj, img
    	let items = response.data.items
    	for (let i in items){
    		if (items[i].images.length > 0){
    			img = items[i].images[0].url
    		} else {
    			img = no_pick
    		}
    		if (i > 0){
	    		if (items[i].name !== items[i - 1].name){
	    			obj = {name: items[i].name, id: items[i].id, image: img}
	    			ar.push(obj)
	    		}
	    	} else {
	    		obj = {name: items[i].name, id: items[i].id, image: img}
	    		ar.push(obj)
	    	}
    	}
    	console.log(ar)
    	this.setState({
    		artists: '',
    		artistsAlbums: ar,
    	})
    })
    .catch(error => {
    	console.log(error)
    })
  }

  getAlbumTracks = event => {
		event.preventDefault()
  	// console.log(event.target.id)
  	let token = localStorage.getItem('token')
  	axios.get(
      `https://api.spotify.com/v1/albums/${event.target.id}/tracks?limit=50`,
      {headers: {
          "Authorization": 'Bearer ' + token
        }
      }
    )
    .then(response => {
    	console.log(response.data)
    	let ar = []
    	let obj
    	let items = response.data.items
    	for (let i in items){
    		obj = {name: items[i].name, id: items[i].id}
    		ar.push(obj)
    	}
    	console.log(ar)
    	this.setState({
    		artistsAlbums: '',
    		albumSongs: ar
    	})
    })
    .catch(error => {
    	console.log(error)
    })
  }

  handlePage = event => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

	render() {
		const { selectedOption, albumSongs, currentPage, SongsPerPage  } = this.state;
    const idxLastSong = currentPage * SongsPerPage;
    const idxFirstSong = idxLastSong - SongsPerPage;
    const currentSongs = albumSongs.slice(idxFirstSong, idxLastSong);

    const renderSongs = currentSongs.map((s, idx) => {
      return <p id={s.id} key={s.id}><iframe src={`https://open.spotify.com/embed/track/${s.id}`} title="track" className="song" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe><AddSpan>+</AddSpan></p>
    });

    const pageNums = [];
    for (let i = 1; i <= Math.ceil(albumSongs.length / SongsPerPage); i++){
      pageNums.push(i)
    }

    const renderPageNums = pageNums.map(num => {
      return (
        <p
          key={num}
          id={num}
          onClick={this.handlePage}
        >
          {num}
        </p>
      )
    })

		return (
			<Flex>
				<SearchDiv>
					<h2>Look Up Music</h2>
					<form>
						<input
							type="text"
							placeholder='Search'
							onChange={this.handleChange}
							name="text"
							value={this.state.text}
						/>
					</form>
					<p>Search by</p>
					<Select
		        value={selectedOption}
		        onChange={this.handleChange2}
		        options={options}
		        className="select"
		      />
		      <button onClick={this.lookUp}>Submit</button>
				</SearchDiv>
				<OverFlow>

					<DisplaySearch>
						{this.state.artists ? (
							<DisplayDiv>
								{this.state.artists.map(a => {
									return (
										<DisplayDivInner onClick={this.artistsAlbums} key={a.id} id={a.id}>
											<p key={a.id} id={a.id}>{a.name}</p>
											<img src={a.image} id={a.id} alt='artist' className="artist"/>
										</DisplayDivInner>
									)
								})}
							</DisplayDiv>
							) : null
						}

						{this.state.artistsAlbums? (
							<DisplayDiv>
							{this.state.artistsAlbums.map(a => {
								return (
									<DisplayDivInner onClick={this.getAlbumTracks} key={a.id} id={a.id}>
										<p key={a.id} id={a.id}>{a.name}</p>
										<img src={a.image} id={a.id} alt='artist' className="artist"/>
									</DisplayDivInner>
								)
							})}
							</DisplayDiv>
						) :
							null
						}

						{this.state.albumSongs? (
							<SongDiv>
                {renderSongs}
                <Pagination>
                {renderPageNums}
                </Pagination>
							</SongDiv>
							) : 
							null
						}

					</DisplaySearch>
				</OverFlow>
			</Flex>
		)
	}
}

export default Search;