import React, {Component} from 'react';
import ServicesOfPost from "../ServicesOfPost/ServicesOfPost";
import Post from "../Post/Post";
import './AllPosts.css'
import {Route, Switch} from "react-router-dom";

class AllPosts extends Component {
    state = {posts:[], chosenBody: ''}
    serviceOfPosts = new ServicesOfPost();
    async componentDidMount() {
        let posts = await this.serviceOfPosts.getAllPosts()
        this.setState({posts})
    }


    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item = {value} key = {value.id} />)
                }
                <div className={'result'}>
                    <Switch>
                        <Route path={`/posts/`} render={() => {
                            return 'asdasdas'
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllPosts;