import React from "react"
/* import {useHistory} from 'react-router-dom' */
import { Container } from "../../Components/Container/Container"
import MenusBar from "../../Components/MenusBar/MenusBar"
/* import Img from 'react-image' */

import DashB01 from "../../Imgs/DashB01.jpg"
import { TitleH3 } from "../Users/Style"



export default function Dashboard(){

    

    return(
        <>
            <MenusBar />
               
            <Container> 
                
                <TitleH3>Sistema para controle financeiro online</TitleH3>

                <img src={DashB01} alt='img' />
                
            </Container>
        </>
    )
}

