import styled from 'styled-components'

export const SearchDiv = styled.div`
  background-color: white;
  height: 450px;
  width: 30.5%;
  padding: 2%;
  border-radius: 8px;
  font-size: 2rem;
  @media (max-width: 1000px){
    width: 96%;
    margin-bottom: 30px;
    height: 260px;
  }
  > h2 {
  	font-size: 3rem;
  }
  > form > input {
  	font-size: 2rem;
  	height: 30px;
  	width: 92%;
  	margin: 15px 0;
  }
  > p {
  	margin-bottom: 15px;
  }
  > button {
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
  }
`
export const Flex = styled.div`
	display: flex;
  @media (max-width: 1000px){
    flex-direction: column;
  }
`
export const OverFlow = styled.div`
	overflow: scroll;
	width: 100%;
	margin-left: 2%;
	border-radius: 8px;
	background-color: white;
  @media (max-width: 1000px){
    margin-left: 0;
    
  }
`
export const DisplaySearch = styled.div`
  padding: 2%;
  height: 450px;
  margin-left: 5%;
  @media (max-width: 1000px){
    height: 260px;
    margin: 0;
  }
`

export const DisplayDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 10px 0;
  justify-content: center;
`
export const DisplayDivInner = styled.div`
  padding: 1%;
  background-color: grey;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 1.6%;
	&:hover {
		background-color: #f5f3f3;
		cursor: pointer;
	}
  > p {
  	font-size: 2rem;
    white-space: pre-wrap;
    width: 120px;
    text-align: center;
    overflow-wrap: break-word
  }
`

export const SongDiv = styled.div`
	padding: 2%
`

export const AddSpan = styled.span`
	font-size: 4rem;
  position: relative;
  top: -21px;
  left: 3.5%;
  border: solid black 1px;
  background-color: #10a0d5;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #11ace5;
  }
`

export const Pagination = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: space-evenly;
  width: 70%;
  margin: 0 auto;
  > p {
    width: 100%;
    text-align: center;
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  }
`

export const H2Result = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-top: 5px;
  @media (max-width: 1000px){
    text-align: center;
  }
`




