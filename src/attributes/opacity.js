import NativeWindComponent from '../nativewindcomponent';

class Opacity extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'opacity',
                alias: 'opacity',
                styles: [
                    {
                        name: "0",
                        value: 0
                    },
                    {
                        name: "25",
                        value: 25
                    },
                    {
                        name: "50",
                        value: 50
                    },
                    {
                        name: "75",
                        value: 75
                    },
                    {
                        name: "100",
                        value: 100
                    },
                ]
            }
        ];
    }
}
const opacity = new Opacity();
export default opacity.map();