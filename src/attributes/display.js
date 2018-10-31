import NativeWindComponent from '../nativewindcomponent';

class Display extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'display',
                alias: 'display',
                styles: [
                    {
                        name: 'none',
                        value: 'none'
                    },
                    {
                        name: 'flex',
                        value: 'flex',
                        overrideName: 'flex'
                    },
                ]
            },
            {
                name: 'overflow',
                alias: 'overflow',
                styles: [
                    {
                        name: 'visible',
                        value: 'visible'
                    },
                    {
                        name: 'hidden',
                        value: 'hidden'
                    }
                ]
            }
        ];
    }
}

const display = new Display();
export default display.map();