// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

import { useEffect, useState } from "react";

export function GithubUser({ username }) {
	const [userData, setUserData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState(username);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setUserData({});
			try {
				const response = await fetch(`https://api.github.com/users/${name}`);
				if (response.status !== 200) {
					console.log(response);
					throw new Error("user not found");
				} else {
					const json = await response.json();
					setUserData({ json });
				}
			} catch (error) {
				setError(error.message);
			} finally {
				console.log(userData);
				setLoading(false);
			}
		}
		fetchData();
	}, [name]);

	return (
		<div>
			{error && <p>{error}</p>}
			{loading && <p>Loading data...</p>}
			{userData && <p>User:{userData?.json?.login}</p>}
			{userData && <p>Name:{userData?.json?.name}</p>}
			{userData && (
				<p>
					Avatar Image:
					<img src={userData?.json?.avatar_url} width={"150px"} />
				</p>
			)}
		</div>
	);
}
