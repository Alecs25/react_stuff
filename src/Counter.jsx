import { useCounter } from "./useCounter";

export function Counter({}) {
	const { onIncrement, onDecrement, onReset, counter } = useCounter(20);

	return (
		<div>
			<p>{counter}</p>
			<button onClick={onIncrement}>Aumenta</button>
			<button onClick={onDecrement}>Diminuisci</button>
			<button onClick={onReset}>Resetta</button>
		</div>
	);
}
