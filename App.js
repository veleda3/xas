import React from 'react';
import {Provider} from 'react-redux';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import store from './src/redux/store'
import AppWithNavigationState from './src/navigators/AppNavigator';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState listener={createReduxBoundAddListener('root')} />
      </Provider>
    )
  }
}
