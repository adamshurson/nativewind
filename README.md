# NativeWind
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)  [![Codeship Status for adamshurson/nativewind](https://app.codeship.com/projects/49b11850-bf6e-0136-78f1-6ec4d683ceeb/status?branch=master)](https://app.codeship.com/projects/313321)  [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg)](https://www.npmjs.com/package/nativewind)
# Introduction
NativeWind is a utility-first library based on [TailwindCSS](https://tailwindcss.com/). Instead of defining components from the top down, NativeWind uses utility-classes to compose components in a faster and more sustainable way.
# Getting Started
NativeWind is available via npm. Nice and easy.
```javascript
npm install nativewind --save
```

Using it in your application is just as easy! Just require it at the root of your App. Note that you do not need to require it in subsequent components, similar to React Router.
```javascript
import React from 'react';
import { Text, View } from 'react-native';
import NativeWind from 'nativewind';
export default class App {
    render() {
        return <NativeWind>
            <View nativewind="flex-1 bg-blue-lighter flex items-center justify-center">
                <Text nativewind="p-4 bg-blue text-white">Look ma, no component styles!</Text>
            </View>
        <NativeWind>;
    }
}
```
# Documentation
Currently a work in progress!