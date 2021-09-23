/* import axios from "axios"; */
import axios from "axios";
import { useEffect, useState } from "react";


import { Container } from "../../Components/Container/Container";
import MenusBar from "../../Components/MenusBar/MenusBar";
import { Frm, TitleH3, InpFrmCreate, BtnCreate } from "./Style";




export default function EditUser (props)  {
    //Pegando o ID que foi enviado após cliclar no Btn Editar da pagina de listagem
     const [id] =  useState(props.match.params.id) 
    
    

    //useEffect é executado quando a pagina é carregada ou atualizada
     useEffect(() =>{
        async function oldUserValue() {
            //const res = await axios.get('https://first-api-rafael.herokuapp.com/users/'+id)
               const user = await axios.get('http://localhost:3333/users/'+id)
               const userEdit = user.data
               document.querySelector("#inpUserName").value =userEdit.name
               document.querySelector("#inpUserEmail").value =userEdit.email
                
            }
            oldUserValue()
     })

        const [userNewValue, setUserNewValue] = useState({
            username:'',
            useremail:''
        })
    //Ainda não esta funcionando direito   INICIO
    const handleUpdate = async e => {
        const  valuename = await document.querySelector("#inpUserName")
        const  valueemail = document.querySelector("#inpUserEmail")
        const resultname = valuename.value
        const resultemail = valueemail.value
            
        

            setUserNewValue({
                username:resultname,
                useremail:resultemail,
            })
            
            console.log(userNewValue.username)
            
        }
    //Ainda não esta funcionando FIM  


    return(
        <>
        
        <MenusBar />
            <Container>
                    <Frm  > 
                        <TitleH3> Editar usuário </TitleH3>
                        
                        
                            <label>Nome do Usuário</label> <br />
                            <InpFrmCreate type= "text" name="inpUserName" id="inpUserName"  /> <br />

                            <label>E-mail do Usuário</label> <br />
                            <InpFrmCreate type="email" name="inpUserEmail" id="inpUserEmail"   /> <br />

                            <BtnCreate type="submit" onClick={handleUpdate} >Atualizar</BtnCreate>
                                    
                    </Frm>

            </Container>


        </>
    )
}