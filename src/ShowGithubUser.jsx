import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ShowGithubUser() {
	const { user } = useParams();
	const [userData, setUserData] = useState({});

	useEffect(() => {
		fetchUser();
	}, []);
	async function fetchUser() {
		try {
			const response = await fetch(`https://api.github.com/users/${user}`, {
				method: "GET",
				headers: {
					Authorization: `token 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 `,
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
		setUserData(() => data);
		console.log(data);
	}

	return (
		<div>
			<p>Login: {userData?.login}</p>
			<p>id: {userData?.id}</p>
			<img width="200px" src={userData?.avatar_url}></img>
			<Link to="..">
				<button>Torna indietro</button>
			</Link>
		</div>
	);
}
