import styled, { keyframes } from 'styled-components';
export const Body = styled.div`
  font-family: arial;
  background-color: lightblue;
  margin-right: 15%;
  margin-left: 15%;
  margin-bottom: 15%;
  margin-top: 5%
`;

export const Title = styled.h2`
display: flex;
flex: stretch;
align-items: center;
justify-content: center;
color: blue;
margin-top: 10%;
margin-right: 10%;
margin-left: 10%;
`;

export const Text = styled.p`
color: blue;
margin-top: 2%;
margin-top: 2%;
margin-right: 5%;
margin-left: 5%;
`;

export const Style = styled.div`
color: blue;
margin-right: 10%;
margin-left: 10%;
margin-bottom: 5px;
`;

export const BorderText = styled.div`
border: 1px solid black;
color: black;
border-radius: 5px;
border-width: medium;
display: flex;
flex: stretch;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-bottom: 5%;;
margin-right: 10%;
margin-left: 10%;
`;

export const Price = styled.div`
color: blue;
display: flex;
flex: stretch;
align-items: center;
justify-content: center;
margin-right: 10%;
margin-left: 10%;
margin-bottom: 5%;
font-size:30px;
`;

export const Button = styled.button`
  font-size: 20px;
  color: white;
  background-color: orange;
  cursor:pointer;
  margin: 10px;
  &:hover
   {
    color: white;
    background-color: #1E90FF;
    cursor: pointer;
  }
  `;

 

export const Background = styled.div`
  background: linear-gradient(to right, white, #add8e9);
  height: 100%;
  animation: gradient 5s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
