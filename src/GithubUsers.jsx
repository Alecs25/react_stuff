// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
	const [userValue, setUserValue] = useState("");
	const [users, setUsers] = useState([]);
	// useEffect(() => {

	// }, [users]);

	function handleSubmit(user) {
		setUsers([...users, user]);
		//console.log(users);
	}

	function handleInputValue(e) {
		setUserValue(() => e.target.value);
	}
	return (
		<div>
			<input type="text" onChange={(e) => handleInputValue(e)} value={userValue} placeholder="userName"></input>
			<button onClick={() => handleSubmit(userValue)}>Submit</button>
			<ul>
				{users.map((e,i) => (
					<li key={i}>
						<GithubUser username={e} />
					</li>
				))}
			</ul>
		</div>
	);
}

/* Starting from the previous exercise, create a new GithubUsers component that has a form with a text input and a submit button.
The input will be used for searching a user by providing their username.
Each user will be displayed in a list, where each list item is a GithubUser component.
These components will take username as a prop. */
