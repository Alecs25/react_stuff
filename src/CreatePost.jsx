import { useState } from "react";

export function CreatePost() {
	const [title, setTitle] = useState("");
	const [post, setPost] = useState("");

	function handleTitle(e) {
		setTitle(() => e.target.value);
	}

	function handlePost(e) {
		setPost(() => e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const data = {
			Title: title,
			Post: post,
		};

		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			});
			if (response.status !== 201) {
				throw new Error("there has been an error");
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Title" value={title} onChange={handleTitle}></input>
			<textarea placeholder="post" value={post} onChange={handlePost}></textarea>
			<button type="submit">Invia post</button>
		</form>
	);
}
