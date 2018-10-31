import NativeWindComponent from '../nativewindcomponent';

class Flexbox extends NativeWindComponent {
    constructor() {
        super();
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
                        name: 'end',
                        value: 'flex-end'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    },
                    {
                        name: 'stretch',
                        value: 'stretch'
                    },
                    {
                        name: 'space-between',
                        value: 'space-between'
                    },
                    {
                        name: 'space-around',
                        value: 'space-around'
                    },
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
                        name: 'end',
                        value: 'flex-end'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    },
                    {
                        name: 'stretch',
                        value: 'stretch'
                    },
                    {
                        name: 'baseline',
                        value: 'baseline'
                    },
                ]
            },
            {
                name: 'alignSelf',
                alias: 'self',
                styles: [
                    {
                        name: 'auto',
                        value: 'auto'
                    },
                    {
                        name: 'start',
                        value: 'flex-start'
                    },
                    {
                        name: 'end',
                        value: 'flex-end'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    },
                    {
                        name: 'stretch',
                        value: 'stretch'
                    },
                    {
                        name: 'baseline',
                        value: 'baseline'
                    },
                ]
            },
            {
                name: 'flex',
                alias: 'flex',
                styles: [
                    {
                        name: '1',
                        value: 1
                    },
                ]
            },
            {
                name: 'flexDirection',
                alias: 'flex',
                styles: [
                    {
                        name: 'row',
                        value: 'row'
                    },
                    {
                        name: 'row-reverse',
                        value: 'row-reverse'
                    },
                    {
                        name: 'column',
                        value: 'column'
                    },
                    {
                        name: 'column-reverse',
                        value: 'column-reverse'
                    },
                ]
            },
            {
                name: 'flexWrap',
                alias: 'flex',
                styles: [
                    {
                        name: 'wrap',
                        value: 'wrap'
                    },
                    {
                        name: 'nowrap',
                        value: 'nowrap'
                    },
                ]
            },
            {
                name: 'justifyContent',
                alias: 'justify',
                styles: [
                    {
                        name: 'start',
                        value: 'flex-start'
                    },
                    {
                        name: 'end',
                        value: 'flex-end'
                    },
                    {
                        name: 'center',
                        value: 'center'
                    },
                    {
                        name: 'stretch',
                        value: 'stretch'
                    },
                    {
                        name: 'space-between',
                        value: 'space-between'
                    },
                    {
                        name: 'space-around',
                        value: 'space-around'
                    },
                ]
            }
        ];
    }
}
const flexbox = new Flexbox();
export default flexbox.map();