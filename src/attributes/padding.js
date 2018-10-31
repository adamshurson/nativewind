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
            }
        ];
    }
}
const padding = new Padding();
export default padding.map();