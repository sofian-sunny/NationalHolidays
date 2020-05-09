import {connect} from 'react-redux';
import {getHolidaysData} from '../../redux/actions/holidaysAction';
import HolidayListScreen from './HolidayListScreen';

const mapStateToProps = (state) => ({
  holidayData: state.data || [],
});

const mapActionCreators = {
  getHolidaysData,
};

export default connect(mapStateToProps, mapActionCreators)(HolidayListScreen);
