import React from 'react';
import NativeWind from './index.js';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <NativeWind>
        <View nativewind="flex-1 justify-center items-center bg-blue-light">
          <View nativewind="shadow">
            <Text nativewind="bg-white p-8 rounded overflow-hidden">Open up App.js to start working on your app!</Text>
          </View>
          <View nativewind="shadow-md m-16">
            <Text nativewind="bg-white p-8 rounded overflow-hidden">Open up App.js to start working on your app!</Text>
          </View>
          <View nativewind="shadow-lg">
            <Text nativewind="bg-white p-8 rounded overflow-hidden">Open up App.js to start working on your app!</Text>
          </View>
        </View>
      </NativeWind>
    );
  }
}
