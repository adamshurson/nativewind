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
                name: 'paddingHorizontal',
                alias: 'px',
                styles: sizes
            },
            {
                name: 'paddingVertical',
                alias: 'py',
                styles: sizes
            },
            {
                name: 'paddingLeft',
                alias: 'pl',
                styles: sizes
            },
            {
                name: 'paddingRight',
                alias: 'pr',
                styles: sizes
            },
            {
                name: 'paddingTop',
                alias: 'pt',
                styles: sizes
            },
            {
                name: 'paddingBottom',
                alias: 'pb',
                styles: sizes
            }
        ];
    }
}
const padding = new Padding();
export default padding.map();