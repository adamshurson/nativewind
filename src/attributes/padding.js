import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';

class Padding extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: "auto",
            value: "auto"
        });
        this.attributes = [
            {
                name: 'padding',
                alias: 'p',
                styles: sizes
            },
            {
                name: 'paddingLeft',
                alias: 'pl',
                styles: styles
            },
            {
                name: 'paddingRight',
                alias: 'pr',
                styles: styles
            },
            {
                name: 'paddingTop',
                alias: 'pt',
                styles: styles
            },
            {
                name: 'paddingBottom',
                alias: 'pb',
                styles: styles
            }
        ];
    }
}
const padding = new Padding();
export default padding.map();