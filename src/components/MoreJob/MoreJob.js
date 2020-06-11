import React from'react';
import './MoreJob.css';

const morejob = (props) => (
    <div className="MoreJob">
        <p>then {props.job1}</p>
        <p>then {props.job2}</p>
        <p>then {props.job3}</p>
        <p>then {props.job4}</p>
    </div>
);

export default morejob;