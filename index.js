import React from "react";
import nwStyles from './src/styles';

export default class NativeWind extends React.Component {
    constructor(props) {
        super(props);
    }
    inject(children) {
        return React.Children.map(children, child => {
            let c = child;
            if (child.props.nativewind !== undefined) {
                c = this.mapProperties(child);
            }
            if (typeof c.props.children === "object") {
                c = React.cloneElement(c, { children: this.inject(child.props.children)});
            }
            return c;
        });
    }
    mapProperties(child) {
        styles = [];
        child.props.nativewind.split(" ").map(nwClass => {
            if (nwStyles.hasOwnProperty(nwClass)) {
                Object.keys(nwStyles[nwClass].value).map(prop => {
                    if (typeof nwStyles[nwClass].value[prop] !== "object") {
                        styles.push(nwStyles[nwClass].value);
                    } else {
                        Object.keys(nwStyles[nwClass].value[prop]).map(subProp => {
                            const s = {};
                            s[subProp] = nwStyles[nwClass].value[prop][subProp];
                            styles.push(s);
                        });
                    }
                });
            }
        });
        if (child.props.style !== undefined) {
            styles.push(child.props.style);
        }
        return React.cloneElement(child, { style: styles });
    }
    render() {
        return this.inject(this.props.children);
    }
}