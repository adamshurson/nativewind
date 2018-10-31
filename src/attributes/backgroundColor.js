import NativeWindComponent from '../nativewindcomponent';
import config from '../defaultConfig';

class BackgroundColor extends NativeWindComponent {
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
                name: 'backgroundColor',
                alias: 'bg',
                styles: colorClasses
            }
        ];
    }
}
const backgroundColor = new BackgroundColor();
export default backgroundColor.map();