import React from "react";
import {GetUserById} from "./GetUserById.jsx";
import './UserPostsLikedDisliked.scss';



export function UserPostsLikedDisliked(props) {

    return <ol className="post_list">
        {props.posts.map((p, index) => (
            <li className="post_item post" key={index}>
                <h2>{p.message}</h2>
                <img src={p.imageUrl} alt={p.message} />
                <div>
                    <p>Created: {p.createdAt}</p>
                    <p>By: <GetUserById id={p.userId}/></p>
                </div>
            </li>
        ))}
    </ol>
}