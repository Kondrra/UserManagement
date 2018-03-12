import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterUserComponent from './RegisterUserComponent';
import axios from 'axios';

axios.defaults.withCredentials = true;

class RegisterUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            userGroup: '',
            history: props.history
        }
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
                [id]: value
            }
        );
    };


    EmptyFields() {
        if (this.state.name === "" || this.state.email === "" || this.state.userGroup === "") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }

    handleClick = (event) => {
        if (this.EmptyFields()) {
            var existingUsers = JSON.parse(localStorage.getItem("allUsers"));
            if (existingUsers == null) existingUsers = [];
            var entry = {
                "name": this.state.name,
                "email": this.state.email,
                "userGroup": this.state.userGroup
            };
            localStorage.setItem("entry", JSON.stringify(entry));
            // Issaugom entry
            existingUsers.push(entry);
            localStorage.setItem("allUsers", JSON.stringify(existingUsers));
            alert("sėkmingai sukurtas vartotojas")
            console.log(localStorage.getItem('allUsers'));
            console.log(JSON.parse(localStorage.getItem('allUsers')));
           /*su duombaze taip atrodytu
           var outputUser {
                name : this.state.name,
                    email: this.state.email,
                    userGroup: this.state.userGroup};

            }
            axios.post(API + "/api/user/users/new", outputUser)
                .then((response) => {
                    this.setState({
                        name: '',
                        email: '',
                        userGroup: ''
                    });
                    alert("Vartotojas užregistruotas!");
                })
                .catch((error) => {
                    console.log(error);
                });
            event.preventDefault(); */
        }
    }


    render() {
        return (
            <div>
                <RegisterUserComponent
                    name={this.state.name}
                    email={this.state.email}
                    group={this.state.userGroup}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterUserContainer;