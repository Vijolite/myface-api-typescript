export async function getPosts(pageNumber, pageSize) {
    const url = `http://localhost:3001/posts?${
        pageNumber
            ? `page=${pageNumber}`
            : ""
    }&${
        pageSize
            ? `pageSize=${pageSize}`
            : ""
    }`

    const response = await fetch(url);
    return await response.json();
}

export async function getUsers(pageNumber, pageSize) {
    const url = `http://localhost:3001/users?${
        pageNumber
            ? `page=${pageNumber}`
            : ""
    }&${
        pageSize
            ? `pageSize=${pageSize}`
            : ""
    }`

    const response = await fetch(url);
    return await response.json();
}

export async function createPost(message, imageUrl) {
    const url = "http://localhost:3001/posts/create";
    const requestBody = {
        message: message,
        imageUrl: imageUrl,
    }

    const response = await fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
        }
    );

    if (!response.ok) {
        throw new Error("Could not create post");
    }
}

export async function createUser(name, email, username, coverImageUrl, profileImageUrl) {
    const url = "http://localhost:3001/users/create";
    const requestBody = {
        name: name,
        email: email,
        username: username,
        coverImageUrl: coverImageUrl,
        profileImageUrl: profileImageUrl,
    }

    const response = await fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
        }
    );
    //console.log(response.body);

    if (!response.ok) {
        throw new Error("Could not create user");
    }
}

export async function likePost(postId) {
    const url = `http://localhost:3001/posts/${postId}/like`;

    const response = await fetch(
        url,
        {
            method: "POST",
        }
    );

    if (!response.ok) {
        throw new Error("Could not like post");
    }
}