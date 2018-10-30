import NativeWindComponent from '../nativewindcomponent';

class Flexbox extends NativeWindComponent {
    constructor() {
        super();
        this.supportedBy = [
            'Image',
            'View',
            'ScrollView',
            'Text'
        ];
        this.attributes = [
            {
                name: 'alignContent',
                alias: 'content',
                styles: [
                    {
                        name: 'start',
                        value: 'flex-start'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    }
                ]
            },
            {
                name: 'alignItems',
                alias: 'items',
                styles: [
                    {
                        name: 'start',
                        value: 'flex-start'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    },
                    {
                        name: 'end',
                        value: 'flex-end'
                    }
                ]
            },
            {
                name: 'justifyContent',
                alias: 'justify',
                styles: [
                    {
                        name: 'center',
                        value: 'center'
                    }
                ]
            },
            {
                name: 'flex',
                alias: 'flex',
                styles: [
                    {
                        name: '1',
                        value: 1
                    }
                ]
            }
        ];
    }
}
const flexbox = new Flexbox();
export default flexbox.map();