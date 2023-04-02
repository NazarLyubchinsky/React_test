import "./App.css";
import React, { useState, useEffect } from "react";

// components
import First from "./components/first/First";
import Post from "./components/cards/Post";

function App() {
	// reactive variables
	const [posts, setPosts] = useState([]);
	// on load
	useEffect(() => {
		getPosts();
	}, []);
	// functions
	function getPosts() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => {
				return setPosts(data);
			});
	}
function deletePost(id) {
	const newPosts = posts.filter((post) => post.id !== id);
	setPosts(newPosts);
}
	return (
		<div className="App">
			<First />
			{posts.map((post) => {
				return <Post delete={deletePost}  key={post.id} post={post}></Post>
			})}
		</div>
	);
}
export default App;