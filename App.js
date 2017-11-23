
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
            deck: { screen: DeckScreen },
            map: { screen: MapScreen },
            review: {
              screen: StackNavigator ({
                review: {screen: ReviewScreen},
                settings: { screen: SettingsScreen }
              })
            }
        }, {
          tabBarPosition: 'bottom'
        })
      }
    }, {
      lazy: true,
      tabBarPosition: 'bottom'
    });
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = {
  container: {
      flex: 1,

  }
};

export default App;
