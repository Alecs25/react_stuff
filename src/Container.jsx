import { useState } from "react";

export function Container({ children, title }) {
	const [collapse, setCollapse] = useState(false);

	function handleClick() {
		setCollapse(!collapse);
	}

	return (
		<div className="containerWrap">
			<h1 onClick={handleClick}>{title}</h1>
			{!collapse && <div className="container">{children}</div>}
		</div>
	);
}
