import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Box from './components/Box';
import MyButton from './components/MyButton';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Box />
          <MyButton />
        </div>
      </Provider>
    );
  }
}

export default App;
