import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';

class Height extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: 0,
            value: 0
        });
        this.attributes = [
            {
                name: 'height',
                alias: 'h',
                styles: sizes
            }
        ];
    }
}
const height = new Height();
export default height.map();