import React, { useState } from "react";
import './post.scss';
import { likePost } from "../../../clients/myFaceClients";

export function Post({ post }) {
//export function Post() {

    // const post = {"id": 130,
    // "message": "Operative system-worthy synergy",
    // "imageUrl": "https://picsum.photos/id/158/600",
    // "createdAt": "2021-01-27 21:55:56",
    // "postedBy": {
    //     "id": 3,
    //     "name": "Valry Gregory",
    //     "username": "vgregory2",
    //     "email": "vgregory2@wsj.com",
    //     "profileImageUrl": "https://robohash.org/vgregory2.png?bgset=bg1",
    //     "coverImageUrl": "https://picsum.photos/id/692/2100/800"
    // }
    // }

    const [whoLikedNames, setWhoLiked]=useState (''); 
    const [whoDislikedNames, setWhoDisliked]=useState ('');  


    function getWhoLiked (arr,names,st_f) {
        let s='';
        if (names==='')
            arr.forEach(person=>s=s+person.name+" ");
        st_f(s);
    }

    return <div className="post">
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
        <div>
            <button className="ld_button" onClick={() => likePost(post.id)}>👍</button>
            <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
            <p onClick={function() {getWhoLiked(post.likedBy,whoLikedNames,setWhoLiked)}}> 
            Liked by {post.likedBy.length}: {whoLikedNames}</p>
            <p onClick={function() {getWhoLiked(post.dislikedBy,whoDislikedNames,setWhoDisliked)}}> 
            Disliked by {post.dislikedBy.length}: {whoDislikedNames}</p>
        </div>
    </div>
}

