import styled from "styled-components";

export const Menus = styled.ul`
  display: flex; //Para mostrar o conteúndo em unica linha
  background-color: #2F4F4F;
  width: 100%;
  
  height: 3em;
  padding: 10px 15px;
  font-family: sans-serif;
  
  a{
    text-decoration: none;
    color: #ffffff;
    margin: 0 10px;
  }
  a:hover{
    color: #d0d2db;
  }
  li{
    font-size: 1.0em;
    list-style: none;
  }

  @media(max-width: 767px) {
    flex-direction: column;
    position: relative;

    height: 7.2em;
    padding: 10px 15px;
  }
`;



