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
        styles.push(child.props.style);
        child.props.nativewind.split(" ").map(nwClass => {
            if (nwStyles.hasOwnProperty(nwClass) && nwStyles[nwClass].supportedBy.includes(child.type.name)) {
                styles.push(nwStyles[nwClass].value);
            }
        });
        return React.cloneElement(child, { style: styles });
    }
    render() {
        return this.inject(this.props.children);
    }
}