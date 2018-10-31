import NativeWindComponent from '../nativewindcomponent';

class ZIndex extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'zIndex',
                alias: 'z',
                styles: [
                    {
                        name: "10",
                        value: 10
                    },
                    {
                        name: "20",
                        value: 20
                    },
                    {
                        name: "30",
                        value: 30
                    },
                    {
                        name: "40",
                        value: 40
                    },
                    {
                        name: "50",
                        value: 50
                    },
                ]
            }
        ];
    }
}
const zIndex = new ZIndex();
export default zIndex.map();