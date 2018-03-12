import React from 'react';
import UserComponent from "./UserComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

const UserListComponent = (props) => {
    const users = props.users.map((user, index) => {
        return (
            <UserComponent
                name = {user.name}
                email = {user.email}
                userGroup = {user.userGroup}
                history = {props.history}
            />
        );
    });

    return(
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Vardas</th>
                        <th>El. Paštas</th>
                        <th>Grupės</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default UserListComponent;