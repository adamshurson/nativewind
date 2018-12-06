const styles = [];
const sizes = [
    0,
    1,
    2,
    4,
    6,
    8,
    10,
    12,
    16,
    18,
    24,
    32,
    48,
    64,
    80,
    96,
    128
];
for (let i = 0; i < sizes.length; i++) {
    styles.push({
        name: sizes[i],
        value: sizes[i]
    });
}
export default styles;
