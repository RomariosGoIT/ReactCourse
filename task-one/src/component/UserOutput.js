import React from 'react';

const UserOutput = (props) => {
    const style = {
        margin: 'auto',
        padding: '10px',
        width: '25%',
        background: '#000',
        color: '#eee'
    }
    
    return (
        <p style={style}>User name: {props.username}</p>   
    )

}

export default UserOutput;