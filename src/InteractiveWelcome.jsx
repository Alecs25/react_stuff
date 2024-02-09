import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
	const [inputName, setInput] = useState("pippo");

	function handleChange(i) {
		//console.log(i.target.value);
		setInput(i.target.value);
	}

	return (
		<div>
			<input type={"text"} onChange={(i) => handleChange(i)} value={inputName}></input>

			<Welcome name={inputName} />
		</div>
	);
}
