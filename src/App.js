import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HolidayListContainer from '../src/screens/HolidayListScreen/HolidayListContainer';

const App = createSwitchNavigator({
  Loading: {
    screen: HolidayListContainer,
  },
});

export default createAppContainer(App);
