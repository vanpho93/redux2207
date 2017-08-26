import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ListWord from './components/ListWord';
import store from './redux/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListWord />
      </Provider>
    );
  }
}

export default App;
