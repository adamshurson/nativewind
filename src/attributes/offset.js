import NativeWindComponent from '../nativewindcomponent';

class Offset extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'left',
                alias: 'pin',
                styles: [
                    {
                        name: 'l',
                        value: 0
                    }
                ]
            },
            {
                name: 'right',
                alias: 'pin',
                styles: [
                    {
                        name: 'r',
                        value: 0
                    }
                ]
            },
            {
                name: 'top',
                alias: 'pin',
                styles: [
                    {
                        name: 't',
                        value: 0
                    }
                ]
            },
            {
                name: 'bottom',
                alias: 'pin',
                styles: [
                    {
                        name: 'b',
                        value: 0
                    }
                ]
            }
        ];
    }
}
const offset = new Offset();
export default offset.map();