import {
  FETCHING_HOLIDAYS_DATA,
  FETCHING_HOLIDAYS_SUCCESS,
  FETCHING_HOLIDAYS_FAILURE,
} from './constants';
import {put, takeEvery, call} from 'redux-saga/effects';

function* fetchHolidaysData(action) {
  try {
    const response = yield call(
      fetch,
      'https://www.googleapis.com/calendar/v3/calendars/en.ae%23holiday%40group.v.calendar.google.com/events?key=AIzaSyDis9MbvcljBUzFS3cLb3dt2sdUQ0EWkNc',
    );
    const responseBody = response.json();
    yield put({type: FETCHING_HOLIDAYS_SUCCESS, responseBody});
  } catch (e) {
    yield put({type: FETCHING_HOLIDAYS_FAILURE});
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_HOLIDAYS_DATA, fetchHolidaysData);
}

export default dataSaga;
