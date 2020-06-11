import React from 'react';
import './Inputlimits.css';
const limit = () => (
    <div className="limitdiv">
        <table>
            <tbody>
            <tr className="tablerow">
                <td>*</td>
                <td className="tableright">any value</td>
            </tr>
            <tr>
                <td>,</td>
                <td className="tableright">Value list seprator</td>
            </tr>
            <tr>
                <td>-</td>
                <td className="tableright">range of values</td>
            </tr>
            <tr>
                <td>/</td>
                <td className="tableright">step values</td>
            </tr>
            <tr>
                <td>*</td>
                <td className="tableright">any value</td>
            </tr>
            <tr>
                <td>(0 - 59)</td>
                <td className="tableright">minutes</td>
            </tr>
            <tr>
                <td>(0 - 23)</td>
                <td className="tableright">hour</td>
            </tr>
            <tr>
                <td>(1 - 31)</td>
                <td className="tableright">Day (monthly)</td>
            </tr>
            <tr>
                <td>(1 - 12)</td>
                <td className="tableright">month</td>
            </tr>
            <tr>
                <td>(1 - 7)</td>
                <td className="tableright">Day (weekly)</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default limit;