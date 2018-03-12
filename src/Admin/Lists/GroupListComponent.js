import React from 'react';
import GroupComponent from "./GroupComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

const GroupListComponent = (props) => {
    const groups = props.groups.map((group, index) => {
        return (
            <GroupComponent
                groupName = {group.groupName}
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
                        <th>grupės pavadinimas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {groups}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default GroupListComponent;