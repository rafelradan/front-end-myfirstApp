import React from "react"
import { useState } from "react"
import {useHistory} from 'react-router-dom'


import { TitleH3, Frm, BtnCreate, InpFrmCreate, SelectFrmCreate, InpFrmCreateName } from './Style'
import MenusBar from "../../Components/MenusBar/MenusBar"
import { Container } from "../../Components/Container/Container"
import api from "../../services/api"
import MaskedInp from "../../Components/MaskedInput/MaskedInput"



export default function CreateUser(){
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')

    const history = useHistory()
    function handleGoToDashboard(){
        history.push('/dashboard')
    }
    
    async function handleCreateUseres(e){
         e.preventDefault() 
          try {
              await api.post('/users',{name, cpf, email, city, gender})
              alert('Usuário cadastrado com sucesso!')
              history.push('/listusers')
          } catch (error) {
              console.log('Error: Não foi possível cadastrar o usuário');
          }
          /* console.log(name, cpf, email, city, gender) */
    } 

    

    return(
        <>
        <MenusBar />
            <Container>
                <Frm onSubmit={handleGoToDashboard} > 
                    <TitleH3> Cadastrar um novo usuário </TitleH3>
                    
                        <label>Nome do Usuário</label> <br />
                        <InpFrmCreateName type= "text" name="inpUserName" id="inpUserName" value={name} onChange={e => setName(e.target.value)} /> <br />

                        <label>CPF do Usuário</label> <br />
                        <MaskedInp type= "text"  value={cpf} onChange={e => setCpf(e.target.value)} /> <br />

                        <label>E-mail do Usuário</label> <br />
                        <InpFrmCreate type="email" name="inpUserEmail" id="inpUserEmail" value={email} onChange={e => setEmail(e.target.value)}  /> <br />

                        <label>Cidade do Usuário</label><br />
                        <InpFrmCreate type="text" name="inpUserCity" id="inpUserCity" value={city} onChange={e => setCity(e.target.value)} /> <br />

                        <label> Genero do Usuário </label> <br />
                        <SelectFrmCreate id="userGender" onChange={e => setGender(e.target.value)} > 
                            <option SelectFrmCreateed selected disabled value={gender}  >Esolha aqui!</option>    
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </SelectFrmCreate> <br /> <br />

                        <BtnCreate type="submit" onClick={handleCreateUseres} >Cadastar</BtnCreate>
                        <br /> <br />

                </Frm>
            </Container>
        </>
    )
    
}