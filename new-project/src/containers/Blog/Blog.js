import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect }  from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost'
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent'

const AsyncLoadPage = asyncComponent(()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }
    render () {        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncLoadPage} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts"/>                    
                </Switch>
            </div>
        );
    }
}

export default Blog;