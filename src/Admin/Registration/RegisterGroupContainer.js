import React, {Component} from 'react';
import RegisterGroupComponent from './RegisterGroupComponent'
import {API} from "../ApiUrl";
import axios from "axios/index";
class RegisterGroupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            history: props.history
        }
    }
       handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [id]: value
            }
        );
    };

    EmptyFields() {
        if (this.state.groupName === "") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }

    handleClick = (event) => {
        if (this.EmptyFields()) {
            var existingGroups = JSON.parse(localStorage.getItem("groups"));
            if (existingGroups == null) existingGroups = [];
            var entry = {
                "groupName": this.state.groupName,
            };
            localStorage.setItem("entry", JSON.stringify(entry));
            // issaugom entry
            existingGroups.push(entry);
            localStorage.setItem("groups", JSON.stringify(existingGroups));
            alert("sėkmingai sukurta grupė")
        }
    }
    /*su duombaze taip atrodytu, ir paskui istustintu languss
               var outputGroup {
                    groupName: this.state.groupName};

                }
                axios.post(API + "/api/groups/groups/new", outputGroup)
                    .then((response) => {
                        this.setState({
                            groupName: ''
                        });
                        alert("Grupė užregistruota!");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                event.preventDefault(); */
    render() {
        return (
            <div>
                <RegisterGroupComponent
                    name={this.state.groupName}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
export default RegisterGroupContainer;