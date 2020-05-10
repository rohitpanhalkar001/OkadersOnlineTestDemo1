import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
} from 'react-navigation-stack';

import movieComponent from '../components/movieComponent';
import MovieDetailScreen from '../components/movieDetailsComponents';



const AppNavigator = createStackNavigator({
 
  
  movieDetail:{
    screen:MovieDetailScreen,
    navigationOptions: {
      header: null,
    }
  }

}, {
  headerMode: 'none',
  
})

const AppNavigatorContainer = createAppContainer(AppNavigator);


export default AppNavigatorContainer;
