import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
	const language = useContext(LanguageContext);
const date = new Date()
const time = date.toUTCString()
	return <div>
        <h1>{language === "en" ? "Clock" : "Orologio"}</h1>
        <hr/>
        <p>{time}</p>
    </div>;
}
