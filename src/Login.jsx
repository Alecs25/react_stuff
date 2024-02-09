import { useEffect, useState } from "react";

export function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [buttonEnabler, setButtonEnabler] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (userName !== "" && password !== "") {
			setButtonEnabler(false);
			console.log(buttonEnabler);
		} else {
			setButtonEnabler(true);
			console.log(userName, password);
		}
	}, [userName, password]);

	function onLogin() {
		setLoggedIn(true);
		alert("loggato:" + " " + loggedIn);
	}

	function handleChange(e) {
		//console.log(e);

		if (e.target.name === "user") {
			setUserName(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	}
	function handleReset() {
		setUserName("");
		setPassword("");
		setRememberMe(false);
	}

function handleRememberMe(){
    setRememberMe(!rememberMe)
}

	return (
		<div>
			<input name="user" type="text" onChange={handleChange} value={userName} />
			<input name="pass" type="text" onChange={handleChange} value={password} />
			<input checked={rememberMe} onClick={handleRememberMe} type="checkbox" />
			<button onClick={onLogin} disabled={buttonEnabler}>
				Login
			</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}
