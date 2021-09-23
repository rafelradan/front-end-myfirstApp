import axios from "axios";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'




import MenusBar from "../../Components/MenusBar/MenusBar";
import { Container } from "../../Components/Container/Container";
import { BtnPgListar, TblPgListar, BtnListar, TitleH3 } from './Style'





export default function ListUsers (){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const history = useHistory ()
    
    async function handleListAllUseres(){
        setLoading(true)
        //const res = await axios.get('https://first-api-rafael.herokuapp.com/users')
        const res = await axios.get('http://localhost:3333/users')
        const usersList = res.data
        setUsers(usersList)
        setLoading(false)       

    }

   
    //Taking the Id Use
     const handleDeleteUser = async (userIdDel) => {
        /* alert(userId) */
        //await axios.delete('https://first-api-rafael.herokuapp.com/users/'+userIdDel)
        await axios.delete('http://localhost:3333/users/'+userIdDel)
        .then(response => {
            if(response.data != null) {
                alert('Usuário deletado com sucesso!')
                handleListAllUseres()
            }
        })        

    }

    const goEdit = async (userIdEdi) => {             
      await  history.push('/edituser/'+userIdEdi)
    }

     

    return(
        <>
        <MenusBar />

        <Container>
            <TitleH3>Listar Usuários</TitleH3> 
            <BtnListar onClick={handleListAllUseres} > Listar os Usuários </BtnListar>

            {
                loading && <p>Carregando...</p>
            }

            <TblPgListar id='ListUsers'>
                <thead id='thead' >
                    <tr style={{textAlign: "center"}}>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody id='tbody' >
                {
                     !loading &&  users.map( user => (
                        <tr key={user.id} style={{textAlign: "center"}} >
                            {/* <td key={user.id} > {user.id} {user.name}, {user.email} </td> */}
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email} </td>
                            <td> 
                                <BtnPgListar>Visualizar</BtnPgListar>
                                <BtnPgListar onClick={() => goEdit(user.id)} > Editar</BtnPgListar>
                                <BtnPgListar onClick={() => handleDeleteUser(user.id)} >Deletar</BtnPgListar>
                            </td>
                        </tr>
                       ) ) 
                    }

                </tbody>
            </TblPgListar>

       </Container>
            
        </>
    )
}