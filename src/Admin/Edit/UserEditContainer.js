import React from 'react';
import {API} from '../ApiUrl';
import RegisterUserComponent from "../Registration/RegisterUserComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

class UserEditContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            userGroup: ''
        }
    }

    componentDidMount() {
        axios.get(API + "/api/users/" + this.props.match.params.id)
        .then((response) => {
            const {name, email,userGroup} = response.data;
            this.setState({
                name : name,
                email : email,
                userGroup : userGroup,
                history: this.props.history
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
                [id]: value
            }
        );
    };

    handleClick = (event) => {
        const outputProduct = {
            name : this.state.name,
            email : this.state.email,
            userGroup: this.state.userGroup

        };

        axios.put(API + "/api/admins/" + this.props.match.params.id, outputProduct)
            .then((response) => {
              alert("Duomenys išsaugoti!");
                this.props.history.push("/admin/admins");
            })
            .catch((error) => {
              alert("Nepavyko! Blogai įvesti duomenys");
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterUserComponent
                    name={this.state.name}
                    surname={this.state.email}
                    username={this.state.userGroup}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default UserEditContainer;
