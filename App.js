import React from 'react';
import NativeWind from './index.js';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <NativeWind>
        <View nativewind="flex-1 items-center justify-center">
          <Text>Open up App.js to start working on your app!</Text>
          <View>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </View>
      </NativeWind>
    );
  }
}
