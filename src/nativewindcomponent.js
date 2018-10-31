export default class NativeWindComponent {
    map() {
        const styles = {};
        this.attributes.map(attr => {
            attr.styles.map(style => {
                const newStyle = {
                    value: {}
                };
                newStyle.value[attr.name] = style.value;
                if (style.overrideName === undefined) {
                    styles[attr.alias + '-' + style.name] = newStyle;
                } else {
                    styles[style.overrideName] = newStyle;
                }
            });
        });
        return styles;
    }
}