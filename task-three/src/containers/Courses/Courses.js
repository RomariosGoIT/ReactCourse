import React, { Component } from 'react';
import Curse from '../Course/Course';
import { Route } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseShowHandle = (id) => {
        this.props.history.push('/courses/' + id);
    }

    render () {

        const course = this.state.courses.map( course => {
            return <article 
            className="Course" 
            key={course.id}
            onClick={()=>this.courseShowHandle(course.id)}>{course.title}</article>;
        } )
        
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {course}
                </section>
                <Route path={this.props.match.url + '/:id'} exact render={(props)=>{
                    return <Curse id={props.match.params.id} title={this.state.courses}/>}}/>
            </div>
        );
    }
}

export default Courses;