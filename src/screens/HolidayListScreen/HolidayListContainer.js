import {connect} from 'react-redux';
import {getHolidaysData} from '../../redux/actions/holidaysAction';
import HolidayListScreen from './HolidayListScreen';

const mapStateToProps = (state) => ({
  holidayData: state.holidayData.data,
  isFetching: state.holidayData.isFetching,
  error: state.holidayData.error,
});

const mapActionCreators = {
  getHolidaysData,
};

export default connect(mapStateToProps, mapActionCreators)(HolidayListScreen);
