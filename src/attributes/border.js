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
            {
                name: 'borderColor',
                alias: 'border',
                styles: colorClasses
            },
            {
                name: 'borderWidth',
                alias: 'border',
                styles: sizes
            },
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