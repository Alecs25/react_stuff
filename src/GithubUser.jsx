// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

import { useEffect, useState } from "react";

export function GithubUser({ username }) {
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	useEffect(() => {
		async function fetchGithubUser(username) {
			setLoading(true);
			try {
				const response = await fetch(`https://api.github.com/users/${username}`);
				if (response.status !== "200") {
					throw new Error("user not found");
				} else {
					const json = await response.json();
					setUserData(json);
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchGithubUser(username);
	}, []);

	return (
		<div>
			{error && <p>{error}</p>}
			{loading && <p>Loading data...</p>}
			{userData && <p>User:{userData.login}</p>}
			{userData && <p>Name:{userData.name}</p>}
			{userData && (
				<p>
					Avatar Image:
					<img src={userData.avatar_url} width={"150px"} />
				</p>
			)}
		</div>
	);
}
