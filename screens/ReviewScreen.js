import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => ({
        title: 'Review Screen',
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('settings')}><Text style={styles.settingsButton}> Settings </Text></TouchableOpacity>
    });
  render() {
    return(
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = {
  settingsButton: {
    color: '#007aff'
  }
}
export default ReviewScreen;
