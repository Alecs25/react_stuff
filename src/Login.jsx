import { useLogin } from "./useLogin";

export function Login() {
	const { update, data } = useLogin();

	return (
		<div>
			<form>
				<input
					value={data.username}
					placeholder="Username"
					onChange={update.username}
				></input>
				<input value={data.password} placeholder="Password" onChange={update.password}></input>
			</form>
		</div>
	);
}
