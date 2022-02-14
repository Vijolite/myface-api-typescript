//import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';
import { Post } from './components/posts/post/post.jsx';
import { PostList } from './components/posts/post_list/PostList.jsx';
import { PostListPage } from './components/posts/post_list_page/PostListPage.jsx';
import { User } from './components/users/user/user.jsx';
import { UserListPage } from './components/users/user_list_page/UserListPage.jsx';
import { UserDetails } from './components/users/user_details/UserDetails.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import { CreatePostPage} from './components/posts/createPostPage/CreatePostPage';
import { CreateUserPage} from './components/users/createUserPage/CreateUserPage';

function App() {
  // return (
  //   <div className="App">
  //     <UserDetails id="58"/>
  //   </div>
  // );
  return (
    <Router>
      
      <header>
        
        <Navbar/>
      </header>
      <Routes>
        <Route path="posts" element={<PostListPage />} />
        <Route path="posts/create" element={<CreatePostPage />} />
        <Route path="users" element={<UserListPage />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/create" element={<CreateUserPage />} />
      </Routes>
    </Router>
    );

}

export default App;
