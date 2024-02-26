import { Link } from "react-router-dom";
import { DATA } from "./Data";

export function Greeting() {
	return (
		<div>
			<ul>
				{DATA.map((e) => (
					<li key={e.id}>
						<Link to={e.name}>{e.name}</Link>

						<img src={e.image} width={"200px"}></img>

						<p>{e.price}</p>
						<p>{e.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
