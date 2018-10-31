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
            },
            {
                name: 'marginLeft',
                alias: 'ml',
                styles: sizes
            },
            {
                name: 'marginRight',
                alias: 'mr',
                styles: sizes
            },
            {
                name: 'marginTop',
                alias: 'mt',
                styles: sizes
            },
            {
                name: 'marginBottom',
                alias: 'mb',
                styles: sizes
            }
        ];
    }
}
const margin = new Margin();
export default margin.map();