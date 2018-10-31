import NativeWindComponent from '../nativewindcomponent';

class Position extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'position',
                styles: [
                    {
                        name: 'absolute',
                        overrideName: 'absolute',
                        value: 'absolute'
                    },
                    {
                        name: 'relative',
                        overrideName: 'relative',
                        value: 'relative'
                    }
                ]
            }
        ];
    }
}
const position = new Position();
export default position.map();