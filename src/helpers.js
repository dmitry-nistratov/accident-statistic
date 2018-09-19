import React from 'react';

export function countNumberOfSmth(someObject){
    const infoObject = {};
    const resultArray = [];

    someObject.sort();

    for(let i = 0; i < someObject.length; i++){
        if (someObject[i] !== someObject[i + 1]){
            (someObject[i + 1] !== undefined)
                ? infoObject[someObject[i]] = someObject.splice(0, i).length
                : infoObject[someObject[i]] = someObject.splice(0, i).length + 1;
            i = 0;
        }
    }

    for(let item in infoObject){
        resultArray.push(
            <li key={infoObject[item]}>{`${item} : ${infoObject[item]}`}</li>
        )
    }

    return resultArray;
}