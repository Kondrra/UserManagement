import React from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

const styles = {
    color: 'red',
    padding: '5px'
}
const green = {
    color: 'green',
    padding: '5px'
}

const UserComponent = (props) => {
    var {name, email, userGroup} = props;



    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{userGroup}</td>
        </tr>
    );

};

export default UserComponent;