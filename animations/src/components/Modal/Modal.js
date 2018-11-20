import React from 'react';

import './Modal.css';

const modal = (props) => {

    const classesModal = ['Modal', 
    props.show === 'entering' 
    ? 'ModalOpen' 
    : props.show === 'exiting' 
    ? 'ModalClosse' 
    : null];

    return (
        <div className={classesModal.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    );
    
};

export default modal;