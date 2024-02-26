import { useParams } from "react-router";
import { DATA } from "./Data";
import { useEffect } from "react";

export function ToggleVisibility() {
	const { name } = useParams();
	const item = DATA.find((e) => e.name === name);

	console.log(item);
	return (
		<div>
			<p>{item.name}</p>
			<p>{item.description}</p>
			<p>{item.price}</p>
			<img src={item.image} width={"200px"}></img>
		</div>
	);
}
