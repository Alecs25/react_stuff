import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useSWRGithubUser(username) {
	const { data, error, isLoading } = useSWR(`https://apigithub.com/users/${username}`, fetcher);

	return { user: data, isError: error, isLoading };
}
