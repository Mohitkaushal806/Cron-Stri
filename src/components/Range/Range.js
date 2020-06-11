import React from 'react';
import './Range.css';

const range = () => (
    <div className="Range">
        <div>
            <p className="min">minutes</p>
        </div>
        <div>
            <p className="hour">hour</p>
        </div>
        <div>
            <p className="daymonth">day (month)</p>
        </div>
        <div>
            <p className="month">month</p>
        </div>
        <div>
            <p className="dayweek">day (week)</p>
        </div>
    </div>
);

export default range;