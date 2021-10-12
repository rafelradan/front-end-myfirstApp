import { width } from "dom-helpers";
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`;

export const DivTop = styled.div`
    width: 150px;
    margin: 50px auto;
    text-align: center;
    margin-bottom: 50px;

    p{
        font-size: .8em;
    }
`;

export const FotoPerfilStl = styled.img`
    width: 9.2em;
    display: flex;
    align-items: center;
    
`;

export const Contatos = styled.section`
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;
        

        h3{
            text-align: center;
            width: 100%;
            margin-bottom: 30px;
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 30px;

            a{
                text-decoration: none;
            }
        }

        @media screen and (max-width: 767px){
            font-size: .8em;
            display: flex;
            flex-direction: column;
        }

`;




