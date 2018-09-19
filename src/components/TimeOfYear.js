import React from 'react';
import {countNumberOfSmth} from '../helpers';

function TimeOfYear(props){
    const {accidentDataArray} = props;
    const dateArray = accidentDataArray.map(value => value.date);
    //const monthArray = dateArray.map(value => value.split('-')[1]);
    const monthArray = dateArray.map(value => Number(value.split('-')[1]));

    return(
        <div>
            <h2>Month : number of accidents</h2>
            <h3>{countNumberOfSmth(monthArray)}</h3>
        </div>
    )
}

export default TimeOfYear;