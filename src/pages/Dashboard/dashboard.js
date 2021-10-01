import React from "react"

import { Container } from "../../Components/Container/Container"
import MenusBar from "../../Components/MenusBar/MenusBar"
import { Body } from "../Users/Style"
import { ImgLogo,  TitleH6 } from "./Style"
import CadUserBranco from "../../Imgs/CadUserBranco.png"



export default function Dashboard(){

    

    return(
        <Body>
            
            <MenusBar />
               
            <Container> 
                
                <ImgLogo src={CadUserBranco} alt='img' />
                <TitleH6>Sistema para cadastro de usuários</TitleH6>
                
            </Container>
        </Body>
    )
}

