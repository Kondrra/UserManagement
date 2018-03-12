import React, {Component} from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
import UserListComponent from "./UserListComponent";


class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [], search: ''};
    }

    componentDidMount = () => {
        localStorage.getItem('allUsers') && this.setState({
            users: JSON.parse(localStorage.getItem('allUsers'))
        })


    };
    handleChange = (event) => {
        this.setState({search: event.target.value});
    };
    render() {

            return (

                    <div>
                        <UserListComponent users={this.state.users} history={this.props.history}/>
                    </div>
            );
        }
}

export default UserList;