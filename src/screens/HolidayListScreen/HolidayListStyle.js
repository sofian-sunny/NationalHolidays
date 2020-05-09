import {StatusBar, Platform} from 'react-native';

export const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f2f4',
  },
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  itemSepratorStyle: {
    backgroundColor: '#f1f2f4',
    height: 1,
  },
  loadingIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
