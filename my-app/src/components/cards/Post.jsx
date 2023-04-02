import React from 'react'

// style
import s from './Post.module.css'


const Post = ({ post, ...props }) => {
	const { title, body, id } = post;
	return (
		<>
			<div className={s.card}>
				<h2>{title}</h2>
				<p>{body}</p>
				<button onClick={() => props.delete(id)}
				style={{
					cursor:"pointer",
					
				}}>
					
				delete</button>
			</div>

		</>
	)
}

export default Post;