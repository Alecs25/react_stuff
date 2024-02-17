import { useState, useEffect } from "react";

export function useGithubUser(username) {
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	useEffect(() => {
		async function fetchGithubUser(username) {
			setLoading(true);
			console.log(username);
			try {
				const response = await fetch(`https://api.github.com/users/${username}`);
				if (response.status !== 200) {
					console.log(response.status);
					throw new Error(response);
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

	return { userData: userData, error: error, isLoading: loading };
}
