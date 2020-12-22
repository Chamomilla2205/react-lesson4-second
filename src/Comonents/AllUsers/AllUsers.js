import React, {Component} from 'react';
import ServicesOfUser from "../ServicesOfUser/ServicesOfUser";
import User from "../User/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class AllUsers extends Component {
    state = {users:[]}
    servicesOfUser = new ServicesOfUser()
    async componentDidMount() {
        let users = await this.servicesOfUser.getAllUsers()
            this.setState({users})
    }

    render() {
        let {users} = this.state;
        console.log(users);
        return (
            <div>
                {
                    users.map(value => <User item = {value} key = {value.id}/>)
                }
                <Switch>
                    <Route path = {'/users/'} render={() => {
                        return 'daf'
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default AllUsers;