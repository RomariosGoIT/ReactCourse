import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css'
// import { Link } from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: []
    }

    
    postSelectedHandle = (id) => {
        // this.setState({selectedPostId: id})
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push('/' + id);
    }

    
    componentDidMount () {
        console.log(this.props)
        axios.get('/posts')
        .then(responce => {
            const posts = responce.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts})
            // console.log('[BLOG]',responce);
        })
        .catch(error => {
            console.log(error)
            // this.setState({error: true})
        });
    }


    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            posts = this.state.posts.map( post => {
                return (
                    // <Link to={'/' + post.id} key={post.id}>
                        <Post
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={()=>this.postSelectedHandle(post.id)} />
                    // </Link>
                )
            })
        };
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}


export default Posts;