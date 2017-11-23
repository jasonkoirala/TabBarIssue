import React, { Component } from 'react';
import { View,ScrollView,Text,Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
class slides extends Component {
  renderSlides() {
    return this.props.data.map((slide) => {
      return (<View key={slide.text} style={styles.slide}>
        <Text style={styles.slideTextStyle}>{slide.text}</Text>
      </View>
    );
    });
  }
  render() {
    return(
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
      {this.renderSlides()}
      </ScrollView>
    );
  }
}
const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideTextStyle: {
    fontSize: 25
  }
}
export default slides;
