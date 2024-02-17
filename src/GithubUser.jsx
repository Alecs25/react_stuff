// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
	const { userData, error, isLoading } = useGithubUser(username );

	return (
		<div>
			{error && <p>{error}</p>}
			{isLoading && <p>Loading data...</p>}
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
