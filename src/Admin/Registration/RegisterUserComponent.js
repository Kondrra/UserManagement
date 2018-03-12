import React from 'react';
import Dropdown from 'react-dropdown'

const RegisterUserComponent = (props) => {


 /*   bandymas istraukti sarasa is localstorage, kad ideti i <select>
 var options = JSON.parse(localStorage.getItem('groups'))
    const arr = [];
    for (var key in options) {
        arr.push(options[key]);
        console.log(arr)}

    var arr3 = Object.values(options);
    var newArr = options.keys(options);
    console.log(newArr);

    var mappedArr = newArr.map(function(i) {
        return [i, options[i]];
    });
    for (var i = 0; i < options.length; i++) {
        let personObject = options[i];

        console.log(JSON.parse(localStorage.getItem('groups')))
   var options = JSON.parse(localStorage.getItem('groups'))
    var newArr = Object.keys(options);
    console.log(newArr);
    var mappedArr = newArr.map(function(i) {
        return [i, options[i]];
    }*/
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <label className="col-sm-2 control-label">Vardas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="name" placeholder="Vardas" value={props.name}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">El. paštas</label>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="email" placeholder="zmogus@tinklapis.com" value={props.email}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">grupė</label>
                <div className="col-sm-3">
                    <input type='text' className="form-control" id="userGroup" placeholder="Pasirinkite grupę"
                           value={props.userGroup}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Išsaugoti</button>
                </div>
            </div>
        </form>
    );

};

export default RegisterUserComponent;
