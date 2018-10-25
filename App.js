import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Teams from './src/scenes/Teams';
import Players from './src/scenes/Players';
import Detail from './src/scenes/Detail';

const AppNavigator = StackNavigator(
  {
    TeamsScreen:{
      screen: Teams,
      navigationOptions: {
        header: null
      }
    },
    PlayersScreen:{
      screen: Players,
      navigationOptions: {
        header: null
      }
    },
    DetailScreen:{
      screen: Detail,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'TeamsScreen',
  }
);

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({

});
