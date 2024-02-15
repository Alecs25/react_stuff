import { useState } from "react";

export function useCounter(initialValue) {
	const [counter, setCounter] = useState(0);

	function handleIncrement() {
		setCounter((c) => c + 1);
	}
	function handleDecrement() {
		setCounter((c) => c - 1);
	}
	function handleReset() {
        setCounter(initialValue)
    }

	return { onIncrement: handleIncrement, onDecrement: handleDecrement, onReset: handleReset, counter: counter };
}
