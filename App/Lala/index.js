import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

export default class Start extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/8b/c5/03/8bc503282a546837ab854d2cb5736ae1.jpg'}} style={styles.backgroundImage}>
      <Image source={{uri: 'http://172.32.0.86:8080/examples/logo.png'}} style={styles.image} />
        <SocialIcon
          title='Sign Up'
          button
          type='facebook'
          onPress={() => { this.props.navigator.push(this.props.routes[1])}}
        />
      </Image>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 280,
    height: 120,
    marginTop: 80,
    alignSelf: 'center'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    //resizeMode: 'cover', // or 'stretch'
    width: 380,
    height: 120,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
