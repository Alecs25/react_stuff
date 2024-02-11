import { useRef, Component, useEffect, useState } from "react";

export function Strict() {
	const firstMount = useRef(false);

	useEffect(() => {
		firstMount.current ? alert("not firstmount") : alert("first mount");
		alert("rerender");
		firstMount.current = true;
	}, []);

	return (
		<div>
			<p>is this first mount? {firstMount.current ? <span>No</span> : <span>yes</span>}</p>
		</div>
	);
}
