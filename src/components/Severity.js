import React from 'react';
import {countNumberOfSmth} from '../helpers';

function Severity(props){
    const {accidentDataArray} = props;
    const severityArray = accidentDataArray.map(value => value.severity);

    return (
        <div>
            <h2>Severity : number of accidents</h2>
            <h3>{countNumberOfSmth(severityArray)}</h3>
        </div>
    )
}

export default Severity;
