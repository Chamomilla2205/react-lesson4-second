import React, {Component} from 'react';
import AllPosts from "./Comonents/AllPosts/AllPosts";
import {
    BrowserRouter as Router, Switch, Route, Link, withRouter
} from "react-router-dom";
import AllUsers from "./Comonents/AllUsers/AllUsers";

class App extends Component {
    render() {
        return (
                <div>
                    <Link to={'/users'}>USERS</Link>
                    <hr/>
                    <Link to={'/posts'}>POSTS</Link>
                    <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <AllPosts/>
                        }}/>
                    </Switch>
                    <hr/>
                </div>
        );
    }
}

export default App;