import { useState } from "react";

export function TodoList() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	function handleBtn() {
		setTodos([...todos, { name: todo }]);
		setTodo("");
	}
	function handleChange(e) {
		setTodo(e.target.value);
	}

	function resetBtn() {
		setTodos([]);
	}

	function handleRemove(i) {
		setTodos((todos) => {
			todos.filter(( index) => index !== i);
		});
	}

	return (
		<div>
			<input value={todo} onChange={handleChange}></input>
			<button onClick={handleBtn}>Add</button>
			<button onClick={resetBtn}>Reset</button>
			<ul>
				{todos.map((e, i) => (
					<li key={i}>
						{e.name}
						<button onClick={() => handleRemove(e)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
}
