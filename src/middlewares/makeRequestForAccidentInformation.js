import {ACCIDENT_INFO_LOAD, START, SUCCESS, FAIL} from '../constants';

export default store => next => action => {
    const {type, callAPI, ...rest} = action;
    if(!callAPI) return next(action);

    next({
        ...rest, type: type + START
    });

    fetch(callAPI)
        .then(response => response.json())
        .then(accidentInformation => next({...rest, type: type + SUCCESS, accidentInformation}))
        .catch(error => next({...rest, type: type + FAIL, error}))
}