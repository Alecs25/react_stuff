export function UncontrolledLogin() {
	function handleOnSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const userName = formData.get("userName");
		const password = formData.get("password");
		const remMe = formData.get("checkRemMe");
		//  const userName = e.target.userName.value
		//  const password = e.target.password.value
		//  const remMe = e.target.checkRemMe.value;
		const data = {
			userName,
			password,
			remMe,
		};

		console.log(data);
	}

	return (
		<div>
			<form onSubmit={(e) => handleOnSubmit(e)}>
				<input name="userName"></input>

				<input name="password"></input>

				<input type="checkbox" name="checkRemMe"></input>

				<button name="submitBtn">Submit</button>
			</form>
		</div>
	);
}
