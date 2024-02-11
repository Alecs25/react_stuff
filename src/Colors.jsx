export function Colors({ colors }) {
	return <ul>{colors.map((color, i) => {
        return(<li key={i}>{color.colorName}</li>)
    })}</ul>;
}
