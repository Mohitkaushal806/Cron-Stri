import React from 'react';
import './Input.css';
const input = (props) => (
    <div>
        <input type="text" className="input" onChange={props.getstr}/>
        
    </div>
);
export default input;