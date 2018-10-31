import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';
import percents from '../percents';

class Width extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: 0,
            value: 0
        });
        this.attributes = [
            {
                // unit width
                name: 'width',
                alias: 'w',
                styles: sizes
            },
            {
                // percent width
                name: 'width',
                alias: 'w',
                styles: percents
            }
        ];
    }
}
const width = new Width();
export default width.map();