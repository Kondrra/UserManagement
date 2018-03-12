import React from 'react';

const RegisterGroupComponent = (props) => {
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <label className="col-sm-2 control-label">Grupės pavadinimas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="groupName" placeholder="grupės pavadinimas" value={props.userGroup}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Išsaugoti</button>
                    <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Atšaukti</button>
                </div>
            </div>
        </form>
    );
};
export default RegisterGroupComponent;