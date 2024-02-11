import { useEffect, useRef, useState } from "react";

export function Counter({}) {
	const initialValue = 0;
	const [counter, setCounter] = useState(initialValue);
	const counterDirection = useRef(null);

	useEffect(() => {
		if (counter > initialValue) {
			counterDirection.current = "up";
		} else {
			counterDirection.current = "down";
		}
	}, [counter]);

	function handleIncrementCounter() {
		setCounter((c) => c + 1);
	}
	function handleDecrementCounter() {
		setCounter((c) => c - 1);
	}
	function handleResetCounter() {
		setCounter(initialValue);
	}

	return (
		<div>
			<p>
				{counter} {counterDirection.current}
			</p>
			<button onClick={handleIncrementCounter}>Increment</button>
			<button onClick={handleDecrementCounter}>Decrement</button>
			<button onClick={handleResetCounter}>Reset</button>
		</div>
	);
}
