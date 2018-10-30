export default class NativeWindComponent {
    map() {
        const styles = {};
        this.attributes.map(attr => {
            attr.styles.map(style => {
                const newStyle = {
                    value: {},
                    supportedBy: this.supportedBy
                };
                newStyle.value[attr.name] = style.value;
                styles[attr.alias + '-' + style.name] = newStyle;
            });
        });
        return styles;
    }
}