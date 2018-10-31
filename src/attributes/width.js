import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';

class Width extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: 0,
            value: 0
        });
        this.attributes = [
            {
                name: 'width',
                alias: 'w',
                styles: sizes
            }
        ];
    }
}
const width = new Width();
export default width.map();