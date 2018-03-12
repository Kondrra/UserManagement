import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import RegisterUserContainer from './Registration/RegisterUserContainer';
import RegisterGroupContainer from './Registration/RegisterGroupContainer';
import UserList from "./Lists/UserList";
import UserEditContainer from "./Edit/UserEditContainer";
import GroupList from "./Lists/GroupList";
import UserDetailsContainer from "./Details/UserDetailsContainer";
import GroupDetailsContainer from "./Details/GroupDetailsContainer";


/*<Route exact path="/admin/group/:groupName" component={GroupDetailsContainer}/>*/
class AdminRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/admin/register/user" component={RegisterUserContainer}/>
                    <Route exact path="/admin/register/group" component={RegisterGroupContainer}/>
                    <Route exact path="/admin/users" component={UserList}/>
                    <Route exact path="/admin/user/edit/:name" component={UserEditContainer}/>
                    <Route exact path="/admin/groups" component={GroupList}/>
                    <Route exact path="/admin/users/:name" component={UserDetailsContainer} />
                    <Route exact path="/admin/group/:groupName" component={GroupDetailsContainer}/>
                </Switch>
            </div>
        );
    }
}

export default AdminRouter;
