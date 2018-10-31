import NativeWindComponent from '../nativewindcomponent';
import config from '../defaultConfig';

class Color extends NativeWindComponent {
    constructor() {
        super();
        const colorClasses = [];
        Object.keys(config.colors).map(color => {
            colorClasses.push({
                name: color,
                value: config.colors[color]
            });
        })
        this.attributes = [
            {
                name: 'color',
                alias: 'text',
                styles: colorClasses
            }
        ];
    }
}
const color = new Color();
export default color.map();