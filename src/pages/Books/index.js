import {useHistory} from 'react-router-dom'
import { Container } from '../../Components/Container/Container';
import MenusBar from '../../Components/MenusBar/MenusBar';

export default function Books(){

    const history = useHistory()

    function handleGoToUsers() {
        history.push('/')
    
    }

    return(
        <div>
            <MenusBar />

            <Container>
                <h1>Books</h1>
                <button onClick={handleGoToUsers}>Go to Users</button>
            </Container>
        </div>
    );
}