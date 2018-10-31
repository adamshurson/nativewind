import NativeWindComponent from '../nativewindcomponent';

class Font extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'fontSize',
                alias: 'text',
                styles: [
                    {
                        name: 'sm',
                        value: 5
                    },
                    {
                        name: 'md',
                        value: 10
                    },
                    {
                        name: 'lg',
                        value: 20
                    },
                    {
                        name: 'xl',
                        value: 30
                    },
                ]
            },
            {
                name: 'fontStyle',
                alias: 'font',
                styles: [
                    {
                        name: 'normal',
                        value: 'normal'
                    },
                    {
                        name: 'italic',
                        value: 'italic'
                    }
                ]
            },
            {
                name: 'fontWeight',
                alias: 'text',
                styles: [
                    {
                        name: 'normal',
                        value: 'normal'
                    },
                    {
                        name: 'bold',
                        value: 'bold'
                    },
                    {
                        name: '100',
                        value: 100
                    },
                    {
                        name: '200',
                        value: 200
                    },
                    {
                        name: '300',
                        value: 300
                    },
                    {
                        name: '400',
                        value: 400
                    },
                    {
                        name: '500',
                        value: 500
                    },
                    {
                        name: '600',
                        value: 600
                    },
                    {
                        name: '700',
                        value: 700
                    },
                    {
                        name: '800',
                        value: 800
                    },
                    {
                        name: '900',
                        value: 900
                    },
                ]
            },
            {
                name: 'textAlign',
                alias: 'text',
                styles: [
                    {
                        name: 'left',
                        value: 'left'
                    },
                    {
                        name: 'right',
                        value: 'right'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    },
                    {
                        name: 'justify',
                        value: 'justify'
                    }
                ]
            },
            {
                name: 'textDecorationLine',
                alias: 'decoration',
                styles: [
                    {
                        name: 'none',
                        value: 'none'
                    },
                    {
                        name: 'underline',
                        value: 'underline'
                    },
                    {
                        name: 'line',
                        value: 'line-through'
                    },
                    {
                        name: 'both',
                        value: 'underline line-through'
                    },
                ]
            },
            {
                name: 'letterSpacing',
                alias: 'tracking',
                styles: [
                    {
                        name: 'tight',
                        value: -1
                    },
                    {
                        name: 'normal',
                        value: 0
                    },
                    {
                        name: 'wide',
                        value: 1
                    }
                ]
            },
            {
                name: 'textTransform',
                styles: [
                    {
                        overrideName: 'uppercase',
                        value: 'uppercase'
                    },
                    {
                        overrideName: 'lowercase',
                        value: 'lowercase'
                    },
                    {
                        overrideName: 'capitalize',
                        value: 'capitalize'
                    },
                ]
            }
        ];
    }
}
const font = new Font();
export default font.map();