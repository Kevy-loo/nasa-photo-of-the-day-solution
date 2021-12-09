import React from 'react';
import styled from 'styled-components';

const StyleContainer = styled.div`
   p {
     background-color: ${props => props.theme.primaryColor};
     color: ${props => props.theme.white};
   }
   h1 {
     background-color: ${props => props.theme.black};
   }
   img:hover{
     border-radius: 50%;
   }
`

const Nasa = (props) => {
  return (
    <StyleContainer>
      <h1>NASA FUN</h1>
      <img src={props.nasaData.url} alt="Nasa APOD" />
      <p>{props.nasaData.date}</p>
      <p>{props.nasaData.explanation}</p>
    </StyleContainer>
  )
}

export default Nasa;