import React, { useState } from "react";
import { createUser } from "../../../clients/myFaceClients";
import './CreateUserForm.scss';

export function CreateUserForm() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [coverImageUrl, setCoverImageUrl] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");

    return <form onSubmit={e => {
        e.preventDefault();
        createUser(name, email, username, coverImageUrl, profileImageUrl);
    }}>
        <p>Name: {name}, Username: {username}</p>

        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
        />
        <br/>
        <label for="username">Username:</label>
        <input
            type="text"
            id="username"
            name="username" 
            onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <label for="email">email:</label>
        <input
            type="text"
            id="email"
            name="email" 
            onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <label for="coverImageUrl">coverImageUrl:</label>
        <input
            type="text"
            id="coverImageUrl"
            name="coverImageUrl" 
            onChange={e => setCoverImageUrl(e.target.value)}
        />
        <br/>
        <label for="profileImageUrl">profileImageUrl:</label>
        <input
            type="text"
            id="profileImageUrl"
            name="profileImageUrl" 
            onChange={e => setProfileImageUrl(e.target.value)}
        />
        <br/>
        <input type="submit" value="Submit" />
    </form>
}