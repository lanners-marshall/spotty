import styled from 'styled-components'

export const Spacing = styled.div`
	height: 100px;
`
export const Banner = styled.div`
	height: 60px;
	background-color: #272d39;
	position: fixed;
	top: 0;
	width: 100%;
`
export const Container = styled.div`
	width: 94%;
	max-width: 980px;
	margin: 0 auto;
`

export const Spotiy = styled.div`
	font-size: 5rem;
	background-color: #ff4486;
	color: white;
	font-family: 'Poppins', sans-serif;
	display: inline-block;
	padding: 1%;
	border-radius: 8px;
	margin: 40px 0;
`
export const SpotiyDiv = styled.div`
	background-color: white;
	justify-content: space-around;
	padding: 4%;
	display: flex;
	border-radius: 8px;
	@media (max-width: 1000px){
		flex-direction: column;
	}
	> div > h1 {
		font-size: 4rem;
		margin-bottom: 15px;
		font-weight: bold;
		color: #272d39;
		@media (max-width: 1000px){
			text-align: center;
		}
		@media (max-width: 500px){
			text-align: left;
		}
	}
	> div > p {
		font-size: 3rem;
		color: #999999;
		@media (max-width: 1000px){
			text-align: center;
			margin-bottom: 15px;
		}
		@media (max-width: 500px){
			font-size: 2rem;
			text-align: left;
		}
	}
`
export const Logout = styled.div`
	margin-top: 15px;
	font-size: 3rem;
	font-family: 'Poppins', sans-serif;
	background-color: #e7e7e7;
	padding: 3%;
	color: #272d39;
	font-weight: bold;
	@media (max-width: 1000px){
		text-align: center;
		padding: 2%;
	}
	&:hover {
		background-color: #f5f3f3;
		cursor: pointer;
	}
` 