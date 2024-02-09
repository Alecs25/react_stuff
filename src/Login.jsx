import { useEffect, useState } from "react";

export function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [buttonEnabler, setButtonEnabler] = useState(false);
    const[loggedIn, setLoggedIn] = useState(false)


	useEffect(() => {
		if (userName !== "" && password !== "") {
			setButtonEnabler(false);
			console.log(buttonEnabler);
		} else {
			setButtonEnabler(true);
			console.log(userName, password);
		}
	}, [userName, password]);

    function onLogin(){
        setLoggedIn(true)
        alert("loggato")
    }
	
	function handleChange(e) {
		//console.log(e);

		if (e.target.name === "user") {
			setUserName(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	}

	return (
		<div>
			<input name="user" type="text" onChange={handleChange} value={userName} />
			<input name="pass" type="text" onChange={handleChange} value={password} />
			<input type="checkbox" />
			<button onClick={onLogin} disabled={buttonEnabler}>
				Login
			</button>
		</div>
	);
}
