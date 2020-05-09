import {FETCHING_HOLIDAYS_DATA} from '../constants';

export function getHolidaysData() {
  console.log('getHolidaysData ');
  
  return {
    type: FETCHING_HOLIDAYS_DATA,
  };
}
