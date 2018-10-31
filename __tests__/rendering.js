import NativeWind from '../src/index';
import React from 'react';
import { Text, View } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../src/defaultConfig';

configure({ adapter: new Adapter() });

describe('Style Injection', () => {
    it("Injected classes should appear in style prop", () => {
        const wrapper = shallow(
            <NativeWind>
                <Text nativewind="text-blue">Hello</Text>
            </NativeWind>
        );
        const colorClass = config.colors["blue"];
        expect(wrapper.prop('style')[0].color).toEqual(colorClass);
    });
});