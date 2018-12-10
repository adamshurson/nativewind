import NativeWindComponent from '../nativewindcomponent';
import config from '../defaultConfig';
import sizes from '../sizes';

class Border extends NativeWindComponent {
    constructor() {
        super();
        const colorClasses = [];
        Object.keys(config.colors).map(color => {
            colorClasses.push({
                name: color,
                value: config.colors[color]
            });
        });
        const radiusSizes = sizes.concat([
            {
                name: 'sm',
                overrideName: 'rounded',
                value: 4
            },
            {
                name: 'md',
                value: 8,
            },
            {
                name: 'lg',
                value: 12,
            }]);
        this.attributes = [
            // Border Colors
            {
                name: 'borderColor',
                alias: 'border',
                styles: colorClasses
            },
            // Border Widths
            {
                name: 'borderWidth',
                alias: 'border',
                styles: sizes
            },
            {
                name: 'borderTopWidth',
                alias: 'border-t',
                styles: sizes
            },
            {
                name: 'borderRightWidth',
                alias: 'border-r',
                styles: sizes
            },
            {
                name: 'borderBottomWidth',
                alias: 'border-b',
                styles: sizes
            },
            {
                name: 'borderLeftWidth',
                alias: 'border-l',
                styles: sizes
            },
            // Border Radius
            {
                name: 'borderRadius',
                alias: 'rounded',
                styles: radiusSizes
            }
        ];
    }
}
const border = new Border();
export default border.map();