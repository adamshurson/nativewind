import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';
import percents from '../percents';

class Height extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: 0,
            value: 0
        });
        this.attributes = [
            {
                // unit height
                name: 'height',
                alias: 'h',
                styles: sizes
            },
            {
                // percent height
                name: 'height',
                alias: 'h',
                styles: percents
            }
        ];
    }
}
const height = new Height();
export default height.map();