import {createStore, applyMiddleware} from 'redux';
import makeRequestForAccidentInformation from '../middlewares/makeRequestForAccidentInformation';
import reducer from '../reducer/index';

const enchancer = applyMiddleware(makeRequestForAccidentInformation);
const store = createStore(reducer, {}, enchancer);

window.store = store;

export default store;