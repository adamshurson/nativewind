import NativeWindComponent from '../nativewindcomponent';
import sizes from '../sizes';

class Margin extends NativeWindComponent {
    constructor() {
        super();
        sizes.push({
            name: "auto",
            value: "auto"
        });
        this.attributes = [
            {
                name: 'margin',
                alias: 'm',
                styles: sizes
            }
        ];
    }
}
const margin = new Margin();
export default margin.map();