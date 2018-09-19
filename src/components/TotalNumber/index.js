import React from 'react';
import './style.css'

function TotalNumber(props){
    const {totalNumber} = props;

    return (
        <div className="total-number">
            <h2>Total number of accident: {totalNumber}</h2>
        </div>
    )
}

export default TotalNumber;