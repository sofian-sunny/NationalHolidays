import {
  FETCHING_HOLIDAYS_DATA,
  FETCHING_HOLIDAYS_SUCCESS,
  FETCHING_HOLIDAYS_FAILURE,
} from '../constants';
const initialState = {
  data: undefined,
  isFetching: false,
  error: false,
};

export default function holidaysReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_HOLIDAYS_DATA:
      return {
        ...state,
        data: undefined,
        isFetching: true,
      };
    case FETCHING_HOLIDAYS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_HOLIDAYS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
