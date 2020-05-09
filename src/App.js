import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {getHolidaysData} from './redux/actions/holidaysAction';

class App extends React.Component {
  componentDidMount() {
    this.props.getHolidaysData();
  }

  render() {
    return (
      <View>
        <Text>Redux Examples</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    holidayData: state.holidayData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHolidaysData: () => dispatch(getHolidaysData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
