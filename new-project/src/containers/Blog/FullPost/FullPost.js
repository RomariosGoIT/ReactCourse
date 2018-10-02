import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {

    state ={
        loadedPost: null
    }

    componentDidMount () {
        console.log(['FullPost'], this.props)
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)){                        
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then(response => {                    
                        console.log(['FullPost-res'], response)
                        this.setState({loadedPost: response.data})
                })
                .catch(error=>console.log(error))
            }
        }
    }

    deletePostHandle = () => {
        axios.delete(`/posts/${this.props.id}`)
        .then(response => {
            console.log(response)
        })
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Loading....</p>;

        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading....</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandle} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;