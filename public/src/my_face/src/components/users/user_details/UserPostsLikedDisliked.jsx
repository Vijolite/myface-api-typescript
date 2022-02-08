import React from "react";
import {GetUserById} from "./GetUserById.jsx";



export function UserPostsLikedDisliked(props) {


    return <ol>
        {props.posts.map((p, index) => (
            <li key={index}>
                <h2>{p.message}</h2>
                <img src={p.imageUrl} alt={p.message} />
                <p>Created: {p.createdAt}</p>
                <p>By: <GetUserById id={p.userId}/></p>
            </li>
        ))}
    </ol>
}