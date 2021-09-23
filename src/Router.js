import {Switch, Route} from 'react-router-dom'

import Users from './pages/Users'
import Books from './pages/Books'
import CreateUser from './pages/Users/CreateUser';
import ListUsers from './pages/Users/ListUsers';
import EditUser from './pages/Users/EditUser';
import Dashboard from './pages/Dashboard/dashboard';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Users} />
            <Route path='/books'  component={Books} />
            <Route path='/dashboard'  component={Dashboard} />
            <Route path='/createuser' component={CreateUser} />
            <Route path='/listusers' component={ListUsers} />
            <Route path='/edituser/:id' component={EditUser} />
        </Switch>
    );
}