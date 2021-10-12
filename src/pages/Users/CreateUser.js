import React from "react"
import { useState } from "react"
import {useHistory} from 'react-router-dom'


import { TitleFrm, Frm, BtnCreate, InpFrmCreate, SelectFrmCreate, InpFrmCreateName, Body, TopFrm } from './Style'
import MenusBar from "../../Components/MenusBar/MenusBar"
import { Container } from "../../Components/Container/Container"
import api from "../../services/api"
import MaskedInp from "../../Components/MaskedInput/MaskedInput"
import CadUserIco from "../../Imgs/CadUserIco.ico"
import { ImgLogoIco } from "../Dashboard/Style"
import Footer from "../../Components/Footer/Footer"



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
        <Body>
        <MenusBar />
            <Container>
                <Frm onSubmit={handleGoToDashboard} > 

                    <TopFrm id="topFrm">
                        <ImgLogoIco src={CadUserIco} alt='img' />
                        <TitleFrm> Cadastrar um novo usuário </TitleFrm>
                    </TopFrm>
                    
                        <label>Nome</label> <br />
                        <InpFrmCreateName type= "text" name="inpUserName" id="inpUserName" value={name} onChange={e => setName(e.target.value)} /> <br />

                        <label>CPF</label> <br />
                        <MaskedInp type= "text"  value={cpf} onChange={e => setCpf(e.target.value)} /> <br />

                        <label>E-mail</label> <br />
                        <InpFrmCreate type="email" name="inpUserEmail" id="inpUserEmail" value={email} onChange={e => setEmail(e.target.value)}  /> <br />

                        <label>Cidade</label><br />
                        <InpFrmCreate type="text" name="inpUserCity" id="inpUserCity" value={city} onChange={e => setCity(e.target.value)} /> <br />

                        <label> Genero</label> <br />
                        <SelectFrmCreate id="userGender" onChange={e => setGender(e.target.value)} > 
                            <option SelectFrmCreateed selected disabled value={gender}  >Escolha aqui!</option>    
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </SelectFrmCreate> <br /> <br />

                        <BtnCreate type="submit" onClick={handleCreateUseres} >Cadastrar</BtnCreate>
                        <br /> <br />

                </Frm>
                
            </Container>
            <Footer />
        </Body>
    )
    
}