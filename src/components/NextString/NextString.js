import React from 'react';
import './NextString.css';

const nextjob = ( props ) => (
    <div className="Next">
        <p><span onClick={props.clicked}>next</span> &nbsp;{props.nextjob}</p>
    </div>
);

export default nextjob;