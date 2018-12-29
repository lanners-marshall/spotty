import styled from 'styled-components'

export const PlaylistDiv = styled.div`
	height: 300px;
  background-color: white;
  border-radius: 8px;
  padding: 2%;
  overflow:scroll;
  margin-right: 2%;
  width: 45%;
  @media (max-width: 1000px){
    width: 96%;
    margin-bottom: 30px;
  }
  > p {
  	font-size: 2rem;
  }
  > h2 {
  	font-size: 3rem;
  	margin-bottom: 15px;
  }
`

export const FlexDiv = styled.div`
	margin-top: 30px;
	display: flex;
  @media (max-width: 1000px){
    flex-direction: column;
  }
`

export const MakePlaylist = styled.div`
	height: 300px;
	background-color: white;
	border-radius: 8px;
	padding: 2%;
	width: 45%;
  @media (max-width: 1000px){
    width: 96%;
    height: 150px;
  }
	> h2 {
		font-size: 3rem;
	}
	> form > input {
		font-size: 2rem;
		margin-top: 15px;
		padding: 1%;
	}
`

export const Btn = styled.button`
	font-size: 2rem;
  background-color: #10a0d5;
  padding: 2%;
  border-radius: 4px;
  color: white;
  margin: 15px 0;
  &:hover {
	  cursor: pointer;
		background-color: #11ace5;
  }
`