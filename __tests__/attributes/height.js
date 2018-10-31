import NativeWind from '../../src/index';
import React from 'react';
import { View } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Height', () => {
    it("Injected classes should recieve the correct value", () => {
        const wrapper = shallow(
            <NativeWind>
                <View nativewind="h-full"></View>
            </NativeWind>
        );
        expect(wrapper.prop('style')[0].height).toEqual('100%');
    });
});