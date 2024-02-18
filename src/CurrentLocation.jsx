import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
	const { isLoading, position, error } = useCurrentLocation();

	return (
		<div>
			{isLoading && <p>Caricando</p>}
			{position !== null && (
				<div>
					<p>Longitudine {position.pos.coords.longitude}</p>
					<p>Latitudine {position.pos.coords.latitude}</p>
				</div>
			)}
			{error && <p>{error}</p>}
		</div>
	);
}
