import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
    return <p style={style} onClick={props.delete}>Some text: {props.text}</p>
}

export default charComponent;