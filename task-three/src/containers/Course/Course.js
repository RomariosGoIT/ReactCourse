import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseId: null,
        courseTitle: null
    }

    componentDidMount () {
        this.loadingData();
    }

    componentDidUpdate () {
        this.loadingData();
    }

    loadingData () {
        if (this.state.courseId !== this.props.id) {
            this.setState({courseId: this.props.id});

        this.props.title.forEach(data => {
                if (+this.props.id === data.id) {
                    this.setState({courseTitle: data.title})
                }          
            })
        }     
    }

    render () {
        return (            
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.state.courseId}</p>
            </div>
        );
    }
}

export default Course;