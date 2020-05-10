import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigatorContainer from '../navigation/AppNavigator';
import { connect } from 'react-redux';
import NavigationService from '../navigation/NavigationService';
import * as appActionCreator from '../redux/app/appActions';
import { bindActionCreators } from 'redux';

class AppComponent extends Component {

  render () {
    console.log('this.props.loading::::::::::::: ' + this.props.loading);
    return (
      <View style={{ flex: 1 }}>
        <AppNavigatorContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.app.loading,
  isConnected: state.app.isConnected,
  
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActionCreator, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
