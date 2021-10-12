import {Switch, Route} from 'react-router-dom'


import Contatos from './pages/Contatos/Contatos'
import CreateUser from './pages/Users/CreateUser';
import ListUsers from './pages/Users/ListUsers';
import EditUser from './pages/Users/EditUser';
import Dashboard from './pages/Dashboard/dashboard';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/contatos'  component={Contatos} />
            <Route path='/dashboard'  component={Dashboard} />
            <Route path='/createuser' component={CreateUser} />
            <Route path='/listusers' component={ListUsers} />
            <Route path='/edituser/:id' component={EditUser} />
        </Switch>
    );
}