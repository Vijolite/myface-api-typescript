import React from "react";
import { Post } from "../post/post.jsx";



export function PostList({ postList }) {
//export function PostList() {
    return <ol>
        {postList.map((post, index) => (
            <li key={index}>
                <Post post={post} />
            </li>
        ))}
    </ol>
}

