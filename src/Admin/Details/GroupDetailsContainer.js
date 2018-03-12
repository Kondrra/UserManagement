import React, {Component} from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
import UserListComponent from "../Lists/UserListComponent";


class GroupDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [], search: ''};
    }

    componentDidMount = () => {
        localStorage.getItem('allUsers') && this.setState({
            users: JSON.parse(localStorage.getItem('allUsers'))
        })

    };
    /*su duomenu baze istrauktume informacija is saraso, kuris nurodo visus users is sitos grupes, pagal grupes id, kuris gaunamas paspaudus.
    componentDidMount = () => {
        axios.get(API + "/api/users/"+this.props.match.params.id)
            .then((response) => {
                this.setState({users: response.data});
            })
            .catch((error) => {
                console.log(error);
            });*/
    handleChange = (event) => {
        this.setState({search: event.target.value});
    };
    render() {
        if (this.state.users === null) {
            return (<div>nieko nėra</div>)
        } else {
            let filteredUsers = this.state.users.filter((user) => {
                    return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || user.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
            return (
                <div className="row">
                    <form className="navbar-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input className="form-control" placeholder="Ieškoti" type="text" value={this.state.search}
                                   onChange={this.handleChange}/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}><i
                                    className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <UserListComponent users={filteredUsers} history={this.props.history}/>
                    </div>
                </div>
            );
        }
    }
}

export default GroupDetailsContainer;