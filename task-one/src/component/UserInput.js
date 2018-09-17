import React from 'react'

const UserInput = (props) => {
    const style = {
        display: 'inline-flex'
    }
    return (
        <div style={style}>
            <p className="input-title">Enter User Name: </p>
            <input type="text" onChange={props.onChange} value={props.name} style={{margin: 15}}/>
        </div>
    
    );
}

export default UserInput;