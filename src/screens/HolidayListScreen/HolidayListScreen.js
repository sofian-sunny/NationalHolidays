import React from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import HolidayListItem from '../../components/HolidayListItem/HolidayListItem';
import {styles} from './HolidayListStyle';

const {container} = styles;

class HolidayListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      holidayData: {},
      error: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {isFetching, holidayData, error} = nextProps;
    if (holidayData !== undefined && holidayData !== prevState.holidayData) {
      return {
        holidayData: holidayData,
        isFetching: isFetching,
        error: error,
      };
    }

    return null;
  }

  componentDidMount() {
    this.props.getHolidaysData();
  }

  renderSeparator = () => {
    return <View style={styles.itemSepratorStyle} />;
  };

  loadingIndicator = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.isFetching) {
      return null;
    }
    return (
      <ActivityIndicator
        size="large"
        color="#000"
        style={styles.loadingIndicatorStyle}
      />
    );
  };

  renderListItem = (item) => {
    const {summary, start} = item;
    return <HolidayListItem title={summary} startDate={start.date} />;
  };

  onRefresh = () => {
    this.setState({isFetching: true});
    this.props.getHolidaysData();
  };

  render() {
    const {isFetching} = this.state;
    const {items} = this.state.holidayData;

    return (
      <SafeAreaView>
        <View style={container}>
          {this.loadingIndicator}
          <FlatList
            data={items}
            extraData={this.state}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={this.onRefresh}
              />
            }
            renderItem={({item}) => this.renderListItem(item)}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HolidayListScreen;
