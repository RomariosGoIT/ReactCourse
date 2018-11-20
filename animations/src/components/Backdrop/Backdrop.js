import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const classesBackdrop = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosse']
    return  (<div className={classesBackdrop.join(' ')}></div>)
};

export default backdrop;