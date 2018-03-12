import React from 'react';

const UserDetailsComponent = (props) => {

    const styles = {
        margin: '20px'
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="thumbnail" style={styles}>
                    <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="..." />
                    <div className="caption">
                        <h3>{props.user.name}</h3>
                        <p>Vartotojo el. paštas: {props.user.email}</p>
                        <p>Vartotojo grupės: {props.user.userGroup}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default UserDetailsComponent;