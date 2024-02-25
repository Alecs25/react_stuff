// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

import { useSWRGithubUser } from "./useSwrGithubUser";

export function GithubUser({ username }) {
	const { user, isError, isLoading } = useSWRGithubUser(username);

	return (
		<div>
			{isError && <p>{isError.message}</p>}
			{isLoading && <p>Loading data...</p>}
			{user && <p>User:{user.login}</p>}
			{user && <p>Name:{user.name}</p>}
			{user && (
				<p>
					Avatar Image:
					<img src={user.avatar_url} width={"150px"} />
				</p>
			)}
		</div>
	);
}
