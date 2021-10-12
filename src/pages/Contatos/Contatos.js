

import MenusBar from '../../Components/MenusBar/MenusBar';
import FotoPerfil from '../../Imgs/FotoPerfil02.png'
import Telefone from '../../Imgs/cell.png'
import Email from '../../Imgs/email.png'
import Linkedin from '../../Imgs/Linkedin.png'
import { DivTop, FotoPerfilStl, Container, Contatos } from './Style';

export default function Books(){

   /*  */

    return(
        <div>
            <MenusBar />

                <Container>
                        
                        <DivTop>
                            <FotoPerfilStl src={FotoPerfil} alt='FotoPerfil'/>
                            <p>Rafael Nascimento</p>
                        </DivTop>

                       <Contatos> 
                           <h3>Contatos</h3>

                           <div>
                               <img src={Telefone} alt='telefone' />
                               <p> <a href='tel:85996384807'> (85) 99638-4807</a> </p>
                           </div>

                           <div>
                               <img src={Email} alt='email' />
                               <p> <a href='mailto:rafaelradan76@gmail.com'> rafaelradan76@gmail.com </a> </p>
                           </div>

                           <div>
                               <img src={Linkedin} alt='linkedin' />
                               <p> <a href="linkedin.com/in/rafael-nascimento-a110a9103" target="_blank" > Linkedin </a> </p>
                           </div>

                       </Contatos>
                        

                </Container>
        </div>
    );
}