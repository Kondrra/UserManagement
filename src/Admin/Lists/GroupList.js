import React, {Component} from 'react';
import {API} from '../ApiUrl';
import axios from 'axios';
import GroupListComponent from './GroupListComponent';


class GroupList extends Component {

    constructor(props) {
        super(props);
        this.state = {groups: [], search: ''};
    }

    componentDidMount = () => {
        localStorage.getItem('groups') && this.setState({
            groups: JSON.parse(localStorage.getItem('groups'))
        })

    };
    /*su duomenu baze.
    componentDidMount = () => {
        axios.get(API + "/api/groups")
            .then((response) => {
                this.setState({groups: response.data});
            })
            .catch((error) => {
                console.log(error);
            });*/
    handleChange = (event) => {
        this.setState({search: event.target.value});
    };
    render() {
        if (this.state.groups === null) {
            return (<div>nieko nėra</div>)
        } else {
            let filteredGroups = this.state.groups.filter((group) => {
                    return group.groupName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
            return (
                <div className="row">
                    <form className="navbar-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input className="form-control" placeholder="Ieškoti" type="text" value={this.state.search}
                                   onChange={this.handleChange}/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}><i
                                    className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <div>
                         <GroupListComponent groups={filteredGroups} history={this.props.history}/>
                   </div>
                </div>
            );
        }
    }
}

export default GroupList;