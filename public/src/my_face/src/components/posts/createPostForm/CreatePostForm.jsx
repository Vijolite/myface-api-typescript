import React, { useState } from "react";
//import { useNavigation } from 'react-router-dom';


import { createPost } from "../../../clients/myFaceClients";
import './CreatePostForm.scss';

export function CreatePostForm() {
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    //const navigate=useNavigation();
    return <form onSubmit={e => {
        e.preventDefault();
        createPost(message, imageUrl);   
        //navigate("/posts", { replace: true });

    }}>
        <p>Message: {message}, ImageUrl: {imageUrl}</p>

        <label for="message">Message:</label>
        <input
            type="text"
            id="message"
            name="message"
            onChange={e => setMessage(e.target.value)}
        />
        <br/>
        <label for="imageUrl">Image URL:</label>
        <input
            type="text"
            id="imageUrl"
            name="imageUrl" 
            onChange={e => setImageUrl(e.target.value)}
        />
        <br/>
        <input type="submit" value="Submit" />
    </form>
}