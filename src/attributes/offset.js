import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';

class Offset extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: 0,
            value: 0
        });
        this.attributes = [
            {
                name: 'left',
                alias: 'l',
                styles: sizes
            },
            {
                name: 'right',
                alias: 'r',
                styles: sizes
            },
            {
                name: 'top',
                alias: 't',
                styles: sizes
            },
            {
                name: 'bottom',
                alias: 'b',
                styles: sizes
            }
        ];
    }
}
const offset = new Offset();
export default offset.map();