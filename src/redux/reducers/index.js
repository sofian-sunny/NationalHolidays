import {combineReducers} from 'redux';
import holidayData from './holidaysReducer';

const rootReducer = combineReducers({
  holidayData,
});

export default rootReducer;
