//import React from 'react';
//import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';
import { Post } from './components/posts/post/post.jsx';
import { PostList } from './components/posts/post_list/PostList.jsx';
import { PostListPage } from './components/posts/post_list_page/PostListPage.jsx';
import { User } from './components/users/user/user.jsx';
import { UserListPage } from './components/users/user_list_page/UserListPage.jsx';
import { UserDetails } from './components/users/user_details/UserDetails.jsx';

function App() {
  // return (
  //   <div className="App">
  //     <UserDetails id="58"/>
  //   </div>
  // );
  // return (
  //   <Router>
  //     <h1>This title is on every page!</h1>
  //     <Routes>
  //       <Route path="/posts">
  //         <PostListPage/>
  //       </Route>
  //       <Route path="/users">
  //         <UserListPage/>
  //       </Route>
  //       <Route path="">
  //         <div>Sorry - that page doesn't exist, try these:</div>
  //         <Link to="/posts"/>
  //         <Link to="/users"/>
  //       </Route>
  //     </Routes>
  //   </Router>
  //   );

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="posts" element={<PostListPage />} />
          <Route path="users" element={<UserListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
