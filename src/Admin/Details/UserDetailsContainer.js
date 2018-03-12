import React, { Component } from 'react';
import UserDetailsComponent from './UserDetailsComponent';
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;
//Taip atrodytu user container'is, kuris rodytu jo informacija.
class UserDetailsContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        };

    }
    componentDidMount() {
        axios.get(API + "/api/users/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    user: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });

    };


    render(){
        return(
            <UserDetailsComponent user={this.state.user} history={this.props.history}/>
        );
    }
}

export default UserDetailsContainer;