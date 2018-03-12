import React from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';

const green = {
    color: 'green',
    padding: '5px'
}
const red ={
    color: 'red',
    padding: '5px'
}

const GroupComponent = (props) => {
    var {groupName} = props;

    var getGroup = (event) => {
        props.history.push("/admin/group/" + groupName);
        event.preventDefault();
    };
    /* grupes trynimas, butu vietoje getGroup antrame span'e.
    var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete(API + "/api/groups/" + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
    }*/

    return (
        <tr>
            <td>{groupName}</td>
            <td>
            <span id={groupName} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                  onClick={getGroup}></span>
                <span id={groupName} className="glyphicon glyphicon-remove" aria-hidden="true" style={red}
                      onClick={getGroup}></span>
            </td>
        </tr>
    )

};

export default GroupComponent;