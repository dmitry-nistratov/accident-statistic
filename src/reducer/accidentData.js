import {ACCIDENT_INFO_LOAD, SUCCESS, START, FAIL} from '../constants';
import {Record} from 'immutable';

const defaultAccidentDataRecord = Record({
    loading: false,
    loaded: false,
    error: false,
    entities: []
});

const defaultAccidentData = new defaultAccidentDataRecord({
    loading: false,
    loaded: false,
    error: false,
    entities: []
});

export default (accidentData = defaultAccidentData, action) => {
    const {type, accidentInformation} = action;

    switch(type){
        case ACCIDENT_INFO_LOAD + START:
            console.log('ACCIDENT_INFO_LOAD_START');
            return accidentData.set('loading', true)
                               .set('loaded', false);

        case ACCIDENT_INFO_LOAD + SUCCESS:
            console.log('ACCIDENT_INFO_LOAD_SUCCESS');
            return accidentData.set('loaded', true)
                               .set('loading', false)
                               .set('entities', accidentInformation);

        case ACCIDENT_INFO_LOAD + FAIL:
            console.log('ACCIDENT_INFO_LOAD_FAIL');
            return accidentData.set('error', true);
    }

    return accidentData;
}