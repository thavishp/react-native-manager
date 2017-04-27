import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC_QmZ8UprrQXqs90GNA8gK0MGYfT7pw90',
      authDomain: 'manager-37c92.firebaseapp.com',
      databaseURL: 'https://manager-37c92.firebaseio.com',
      projectId: 'manager-37c92',
      storageBucket: 'manager-37c92.appspot.com',
      messagingSenderId: '868250043016',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
