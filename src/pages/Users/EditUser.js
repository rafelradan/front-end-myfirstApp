import { useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'

import { Container } from "../../Components/Container/Container";
import MaskedInp from "../../Components/MaskedInput/MaskedInput";
import MenusBar from "../../Components/MenusBar/MenusBar";
import api from "../../services/api";
import { Frm, TitleH3, InpFrmCreate, BtnCreate, InpFrmCreateName, SelectFrmCreate } from "./Style";





export default function EditUser ()  {
    //Pegando o ID que foi enviado após cliclar no Btn Editar da pagina de listagem
      const {id} = useParams()
    
     const [name, setName] = useState('')
     const [cpf, setCpf] = useState('')
     const [email, setEmail] = useState('')
     const [city, setCity] = useState('')
     const [gender, setGender] = useState('')

     const history = useHistory()

    //useEffect é executado quando a pagina é carregada ou atualizada
     useEffect(() =>{
        async function oldUserValue() {
            //const res = await axios.get('https://first-api-rafael.herokuapp.com/users/'+id)
               const res = await api.get('/users/'+id)
               const userEdit = res.data
               setName(userEdit.name)
               setCpf(userEdit.cpf)
               setEmail(userEdit.email)
               setCity(userEdit.city)
               setGender(userEdit.gender)
               console.log(userEdit)
            }
            oldUserValue()
     },[id])

        //Essa será a função para salvar os novos dados
        async function saveData(e){
            e.preventDefault() 
          try {
              await api.put('/users/'+id,{name, cpf, email, city, gender})
              alert('Usuário atualizado com sucesso!')
              history.push('/listusers')
          } catch (error) {
              console.log('Error: Não foi possível cadastrar o usuário');
          }
            
        }

        console.log('CPF',cpf)   
        
    return(
        <>
        
        <MenusBar />
            <Container>
                    <Frm  > 
                        <TitleH3> Editar usuário </TitleH3>
                        
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

                            <BtnCreate type="submit" onClick={saveData} >Atualizar</BtnCreate>
                                    
                    </Frm>

            </Container>


        </>
    )
}