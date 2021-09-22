import React from "react"
import { useState } from "react"
import axios from 'axios'
import {useHistory} from 'react-router-dom'



import { TitleH3, Frm, BtnCreate, InpFrmCreate } from './Style'
import MenusBar from "../../Components/MenusBar/MenusBar"


export default function CreateUser(){
    const [newuser, setNewuser] = useState({
        username: '',
        useremail:''
    })

    const history = useHistory()
    function handleGoToDashboard(){
        
        history.push('/dashboard')
    }
    
           
   
    //Pegar o valor dos Input do form e atualizar o State
      const valorInput = async e => {
      const  valuename = document.querySelector("#inpUserName")
      const  valueemail = document.querySelector("#inpUserEmail")
      const resultname = valuename.value
      const resultemail = valueemail.value
        
            setNewuser({
            username: resultname,
            useremail: resultemail
        })
    }

    async function handleCreateUseres(){
        await axios.post('http://localhost:3333/users', {
            name: newuser.username,
            email: newuser.useremail
          }) 
          .then( (response) => {
            alert('Usuário cadastrado com sucesso!')
            history.push('/dashboard')
            
          })
          .catch((error) => {
            console.log('Error: Não foi possível cadastrar o usuário');
          });
      
        /* e.preventDefault()  */
    } 

       
    

    return(
        <>
            <MenusBar />
                <Frm onSubmit={handleGoToDashboard} > 
                    <TitleH3> Criar um novo usuário </TitleH3>
                    
                    
                        <label>Nome do Usuário</label> <br />
                        <InpFrmCreate type= "text" name="inpUserName" id="inpUserName" onChange={valorInput} /> <br />

                        <label>E-mail do Usuário</label> <br />
                        <InpFrmCreate type="email" name="inpUserEmail" id="inpUserEmail" onChange={valorInput}  /> <br />

                        <BtnCreate type="submit" onClick={handleCreateUseres} >Cadastar</BtnCreate>
                    
                    
                </Frm>
        </>
    )
    
}