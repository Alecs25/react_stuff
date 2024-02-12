import { useState } from "react";

export function Button() {
	const [items, setItems] = useState([]);

	function handleClick() {
		setItems([...items, `Item ${items.length + 1}`]);
		console.log(items);
	}

	return (
		<div>
			<button onClick={handleClick}>Add</button>
			{items.length > 0 && (
				<ul>
					{items.map((e, i) => (
						<li key={i}>{e}</li>
            ))}
				</ul>
			)}
		</div>
	);
}
