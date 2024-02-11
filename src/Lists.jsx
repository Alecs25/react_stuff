import { Color } from "./Color";
import { Colors } from "./Colors";

export function Lists() {
	
    const colors = [
			{ id: 1, colorName: "red" },
			{ id: 2, colorName: "green" },
			{ id: 3, colorName: "yellow" },
		];

    function arrayColors(){

    }

	return (
		<div>
			<Color color={{ id: 1, name: "red" }} />
			<Colors colors={colors}/>
		</div>
	);
}
