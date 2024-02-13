import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
	const [language, setLanguage] = useState(null);

	function handleLanguage(e) {
		// console.log(e.target.value);
    setLanguage(e.target.value)
	}

	return (
		<LanguageContext.Provider value={language}>
			<select onChange={(e) => handleLanguage(e)} name="language">
				<option value="it">Italiano</option>
				<option value="en">English</option>
			</select>
			<Clock />
		</LanguageContext.Provider>
	);
}

export default App;
