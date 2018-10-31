import NativeWindComponent from '../nativewindcomponent';

class Shadow extends NativeWindComponent {
    constructor() {
        super();
        this.attributes = [
            {
                name: 'shadow',
                alias: 'shadow',
                styles: [
                    {
                        name: 'sm',
                        overrideName: 'shadow',
                        value: {
                            shadowColor: "#000", 
                            shadowOffset: { width: 0, height: 2 }, 
                            shadowOpacity: 0.25, 
                            shadowRadius: 2,
                            elevation: 5
                        }
                    },
                    {
                        name: 'md',
                        value: {
                            shadowColor: "#000", 
                            shadowOffset: { width: 1, height: 3 }, 
                            shadowOpacity: 0.4, 
                            shadowRadius: 3,
                            elevation: 6
                        }
                    },
                    {
                        name: 'lg',
                        value: {
                            shadowColor: "#000", 
                            shadowOffset: { width: 2, height: 4 }, 
                            shadowOpacity: 0.5, 
                            shadowRadius: 4,
                            elevation: 7
                        }
                    }
                ]
            }
        ]
    }
}

const shadow = new Shadow();
export default shadow.map();