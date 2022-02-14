import React from "react";
import { Post } from "../post/post.jsx";
import './PostList.scss';




export function PostList({ postList }) {
//export function PostList() {
    return <ol className="post_list">
        {postList.map((post, index) => (
            <li className="post_item" key={index}>
                <Post post={post} />
            </li>
        ))}
    </ol>
}

