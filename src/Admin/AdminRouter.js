import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import RegisterUserContainer from './Registration/RegisterUserContainer';
import RegisterGroupContainer from './Registration/RegisterGroupContainer';
import UserList from "./Lists/UserList";


  class AdminRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route exact path="/admin/register/user" component={RegisterUserContainer} />
              <Route exact path="/admin/register/group" component={RegisterGroupContainer} />
                <Route exact path="/admin/userList" component={UserList} />
            </Switch>
          </div>
        );
      }
    }

  export default AdminRouter;
