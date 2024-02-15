import { useState } from "react";

export function useLogin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleInputChangeUsername(event) {
		setUsername((c) => event.target.value);
	}

	function handleInputChangePassword(event) {
		setPassword((c) => event.target.value);
		//console.log(password);
	}

	return {
		update: { username: handleInputChangeUsername, password: handleInputChangePassword },
		data: { username: username, password: password },
	};
}
