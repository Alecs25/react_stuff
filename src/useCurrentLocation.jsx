import { useEffect, useState } from "react";

export function useCurrentLocation() {
	const [position, setPosition] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true), requestPos();
	}, []);

	function requestPos() {
		navigator.geolocation.getCurrentPosition(handlePosition, handleError);
	}

	function handleError(error) {
		setError(error.message);
		setIsLoading(false);
	}

	function handlePosition(pos) {
		setPosition({ pos });
		setIsLoading(false);
	}

	return { position: position, error: error, isLoading: isLoading };
}
