const styles = [];
for (let i = 0; i < 9; i++) {
    const val = Math.pow(2, i);
    styles.push({
        name: val,
        value: val
    });
}
export default styles;