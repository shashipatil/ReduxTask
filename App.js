import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigator from './AppNavigator';
import reducer from './reducer';

const store = createStore(reducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <AppNavigator />
      </Provider>
    );
  }
}