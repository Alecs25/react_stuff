import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { ShowMessage } from "./ShowMessage";

export function GithubUserList() {
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		console.log(usersList);
	}, [usersList]);

	async function fetchUsers() {
		try {
			const response = await fetch(`https://api.github.com/users`, {
				method: "GET",
				headers: {
					Authorization: `token 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`,
				},
			});
			const data = await response.json();
			if (response.status === 200) {
				handleFetchData(data);
			} else {
				throw new Error(`Error status : ${response.status}`);
			}
		} catch (error) {
			console.error(error);
		} finally {
		}
	}

	function handleFetchData(data) {
		setUsersList(() => data);
	}

	return (
		<div>
			<button onClick={fetchUsers}>Fetch Users</button>

			<ul>
				{usersList &&
					usersList.map((e, i) => (
						<li key={e.login}>
							<Link key={i} to={e.login}>
								{e.login}
							</Link>
						</li>
					))}
			</ul>
			<Routes>
				<Route path=":user" element={<ShowGithubUser />} />
				<Route index={true} element={<ShowMessage />}></Route>
			</Routes>
		</div>
	);
}
