import styled from 'styled-components'

export const MeDiv = styled.div`
	margin-top: 30px;
	padding-bottom: 100px;
	border-radius: 8px;
`

export const PlayLists = styled.div`
	> h2 {
		font-size: 3rem;
		margin-bottom: 15px;
	}
	> p {
    font-size: 2rem;
    background-color: #10a0d5;
    display: table;
    margin-bottom: 10px;
    padding: 2%;
    border-radius: 4px;
    color: white;
    &:hover {
		  cursor: pointer;
			background-color: #11ace5;
    }
	}
	@media (max-width: 1000px){
		> h2 {
			font-size: 4rem;
			text-align: center;
		}
		> p {
			width: 85%;
			margin: 15px auto;
		}
	}
`
export const ResFlex = styled.div`
	@media (max-width: 1000px){
		display:flex;
		justify-content: space-around;
	}
`

export const PersonalDiv = styled.div`
	overflow: scroll;
	border-radius: 8px;
	padding: 2%;
	background-color: white;
	height: 500px;
	margin-right: 2%;
	width: 90%;
	@media (max-width: 1000px){
		margin-bottom: 30px;
		width: 96%
	}
`

export const FlexDiv = styled.div`
	display: flex;
	> div > div > h2 {
		font-size: 2rem;
		margin: 15px 0;
		line-height: 1.3;
	}
	@media (max-width: 1000px){
		flex-direction:column;
		> div > div > h2 {
			font-size: 4rem;
			text-align: center;
		}
	}
	@media (max-width: 600px){
		> div > div > h2 {
			font-size: 3rem;
		}
	}
`

export const Songs = styled.div`
	border-radius: 8px;
	background-color: white;
	width: 100%;
	overflow:scroll;
	margin-left: 2%;
	> h3 {
    font-size: 3rem;
    text-align: center;
    margin: 10px 0;
	}
	@media (max-width: 1000px){
		margin: 0;
		margin-top: 15px;
	}
`

export const LoadTrack = styled.div`
	background-color: white;
	width: 100%;
	border-radius: 8px;
	@media (max-width: 1000px){
		margin-bottom: 30px;
	}
	> h3 {
		font-size: 3rem;
    text-align: center;
    margin: 10px 0;
	}
` 

export const TrackHolder = styled.div`
  height: 460px;
  padding: 2%;
  > p {
  	font-size: 1.6rem;
  }
`