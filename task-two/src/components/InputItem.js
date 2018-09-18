import React from 'react';

const inputItem = (props) => {
    return <input type="text" onChange={props.change} value={props.text}/>
}


export default inputItem;