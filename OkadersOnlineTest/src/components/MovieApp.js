import React, {useEffect} from 'react';
// import AppContainer from '../containers/AppContainer';
import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import AppContainer from '../components/AppCompnent';

const MovieApp = props => {


  return (
    <Provider store={configureStore()}>
      <AppContainer/>
    </Provider>
  );
};

export default MovieApp;
