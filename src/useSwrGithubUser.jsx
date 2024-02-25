import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useSWRGithubUser(username) {
	if (username !== null) {
		const { data, error, isLoading, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);

		return { user: data, isError: error, isLoading, refreshData: mutate };
	} else {
		return { user: null, isError: null, isLoading: null, refreshData: null };
	}
}
