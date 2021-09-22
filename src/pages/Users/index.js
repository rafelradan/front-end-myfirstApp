import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import MenusBar from '../../Components/MenusBar/MenusBar';
import { Container } from '../../Components/Container/Container';

export default function Users(){
    const [ users, setUsers ] = useState([])
    const [loading, setLoading] = useState(false)
    
    const history = useHistory()

    function handleGoToBooks(){
        history.push('/books')
    }

    async function handleListUseres(){
      setLoading(true)
      //const res = await axios.get('https://first-api-rafael.herokuapp.com/users')
      const res = await axios.get('http://localhost:3333/users')
      const usersList = res.data
      setUsers(usersList)
      setLoading(false)
    }

    return(
            <div> 
                <MenusBar />

                <Container>
                    <h1>Users</h1>
                    <button onClick={handleGoToBooks}>Go to books</button>
                    <button onClick={handleListUseres} >Listar</button>
                    
                    {
                        loading && <p>Carregando...</p>
                    }

                    <ul style={{marginTop: 15}} >
                    
                        {
                        !loading &&  users.map( user => (
                            <li key={user.id} > {user.name}, {user.email} </li>
                        ) ) 
                        }
                    </ul>
                </Container>
            </div>
    );
}