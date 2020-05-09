import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './HolidayListItemStyle';
import PropTypes from 'prop-types';

const {container, dateStyle, summeryStyle} = styles;

const HolidayListItem = (props) => {
  HolidayListItem.propTypes = {
    title: PropTypes.string,
    startDate: PropTypes.string,
  };
  HolidayListItem.defaultProps = {
    callBackFunction: () => {},
    title: '',
    startDate: '',
  };

  return (
    <TouchableOpacity style={container} onPress={props.callBackFunction}>
      <Text style={dateStyle}>{props.startDate}</Text>
      <Text style={summeryStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default HolidayListItem;
