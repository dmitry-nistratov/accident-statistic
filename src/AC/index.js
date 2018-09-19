import {ACCIDENT_INFO_LOAD} from '../constants';

export function getAccidentInformation(year){
    return {
        type: ACCIDENT_INFO_LOAD,
        callAPI: `https://api-argon.tfl.gov.uk/AccidentStats/${year}?app_id=6b3c8658&app_key=94090a2e4b8d01c4cba70d444b8ef150`,
    }
}