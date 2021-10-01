import React from "react"
import { NavLink } from "react-router-dom"

import { Menus } from './Style'

/* import Logo from "../../Imgs/LogoMeuDinheiro01.png" */




export default function MenusBar(){
        
    return(
        <>
            <Menus> 
                <NavLink to='/dashboard' > <li> Dashboard</li> </NavLink>
                <NavLink to='/createuser' > <li>Cadastrar Usuários</li> </NavLink>
                <NavLink to='/listusers' > <li> Listar Usuários</li> </NavLink>
            </Menus> 
            {/* <img src={Logo} alt='logo' /> */}
        </>    

        
    )
}

