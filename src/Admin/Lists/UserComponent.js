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

const UserComponent = (props) => {
    var {name, email, userGroup} = props;

    var getUser = (event) => {
        props.history.push("/admin/users/" + name);
        event.preventDefault();
    };
/* user'io trynimas, butu vietoje getUser treciame span'e.
var handleRemove = (event) => {
props.remove(event.target.id);
axios.delete(API + "/api/groups/" + event.target.id)
.then(response => {

})
.catch(error => {
  console.log(error);
})
}*/
    var editUser = (event) => {
        props.history.push("/admin/user/edit" + name);
        event.preventDefault();
    };
return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{userGroup}</td>
       <td>
            <span id={name} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                  onClick={getUser}></span>
           <span id={name} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green}
                 onClick={editUser}></span>
           <span id={userGroup} className="glyphicon glyphicon-remove" aria-hidden="true" style={red}
                 onClick={getUser}></span>
        </td>
    </tr>
);

};

export default UserComponent;