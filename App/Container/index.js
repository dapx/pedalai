import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Nav from '../Nav/index';
import Start from '../Start/index';

import { SocialIcon } from 'react-native-elements';
const routes = [
  {id: 0, title: "Login"},
  {id: 1, title: "Lista de Bikes"},
]

export default class Pedalai extends Component {

  renderScene(route, navigator){
    console.log('renderScene');
    if (route.id === 0){
      console.log('if0');
      return (
        <Start navigator={navigator} routeId={route.id} routes={routes} />
      )
    } else if (route.id === 1){
      console.log('if1');
      return (
        <View>
        <Nav navigator={navigator} routeId={route.id} routes={routes} />
        </View>
      )
    } else {
      console.log('else');
      return (
        <View>
        <Start navigator={navigator} routes={routes} routeId={route.id}/>
        </View>
      )
    }
  }

  render(){
    return (
      <View style={{flex:1}}>
      <Navigator
      initialRoute={routes[0]}
      renderScene={this.renderScene.bind(this)}/>
      </View>
     )
   }
}

const styles = StyleSheet.create({
  menu: {
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
    image: {
    width: 240,
    height: 120,
    backgroundColor: '#000000',
  },
    instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
