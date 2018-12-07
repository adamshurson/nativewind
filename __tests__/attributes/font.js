import NativeWind from '../../src/index';
import React from 'react';
import { Text } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Font', () => {
    it("Injected classes should recieve the correct value", () => {
        const wrapper = shallow(
            <NativeWind>
                <Text nativewind="text-xl">Wow that was easy!</Text>
            </NativeWind>
        );
        expect(wrapper.prop('style')[0].fontSize).toEqual('30');
    });
});