import { useState } from "react";

export function TodoList() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	function handleBtn() {
		setTodos([...todos, { name: todo }]);
	}
	function handleChange(e) {
		setTodo(e.target.value);
	}

	function RenderLi() {
		return todos.map((e, i) => <li key={i}>{e.name}</li>);
	}

	return (
		<div>
			<input value={todo} onChange={handleChange}></input>
			<button onClick={handleBtn}>Add</button>
			<ul>
				<RenderLi />
			</ul>
		</div>
	);
}
