import styled, { keyframes } from 'styled-components';
export const Body = styled.div`
  font-family: arial;
  background-color: lightblue;
  margin-right: 15%;
  margin-left: 15%;
  margin-bottom: 15%;
  margin-top: 5%
`;

export const Title = styled.h1`
display: flex;
flex: stretch;
align-items: center;
justify-content: center;
color: blue;
margin-top: 10%;
margin-right: 10%;
margin-left: 10%;;
`;

export const Text = styled.p`
display: flex;
flex: stretch;
align-items: center;
justify-content: center;
margin-right: 10%;
margin-left: 10%;
margin-top: 2,5%;
font-size: 20px;
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

export const WelcomeButton = styled.button`
  background-color: #97bdc9;
  color: black;
  padding: 20px 40px;
  display: flex;
flex: stretch;
align-items: center;
justify-content: center;
margin-top: 15%;
margin-right: 37%;
margin-left: 37%;
  border-radius: 50px;
  margin-bottom: 12px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 10px 20px rgba(,0.19), 0px 6px 6px rgba(0.23);
  

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 15px 30px rgba(0.19), 0px 9px 9px rgba(0.23);
  }
`;
