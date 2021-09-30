import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'


import MenusBar from "../../Components/MenusBar/MenusBar";
import { Container } from "../../Components/Container/Container";
import { BtnPgListar, TblPgListar, TitleH3 } from './Style'
import api from "../../services/api";



export default function ListUsers (){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const history = useHistory ()
    
    async function handleListAllUseres(){
        setLoading(true)
        //const res = await axios.get('https://first-api-rafael.herokuapp.com/users')
        const res = await api.get('/users')
        const usersList = res.data
        setUsers(usersList)
        setLoading(false)       
    }
   
    //Taking the Id Use
    async function handleDeleteUser(userIdDel) {
        if(window.confirm("Você deseja realmente excluir esse usuário?")){
            try {
                await api.delete('/users/'+userIdDel)
                handleListAllUseres() 
                alert('Usuário deletado com sucesso!') 
            } catch (error) {
                alert('Erro ao tentar deletar o usuário!')
            }
        }        
    }

    

    function goEdit(userIdEdi) {             
      history.push('/edituser/'+userIdEdi)
    }

    useEffect(() =>{
        handleListAllUseres()  
    },[])

    return(
        <>
        <MenusBar />

        <Container>
            <TitleH3>Listar Usuários</TitleH3> 

            {
                loading && <p>Carregando...</p>
            }

            <TblPgListar id='ListUsers'>
                <thead id='thead' >
                    <tr style={{textAlign: "center"}}>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>E-mail</th>
                        <th>Cidade</th>
                        <th>Genero</th>
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
                            <td>{user.cpf} </td>
                            <td>{user.email} </td>
                            <td>{user.city} </td>
                            <td>{user.gender} </td>
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