import {React,useState} from 'react';
import Header from './components/header';
import FAB from './components/fab';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import './App.css';
import Home from './pages/Home';
import NestedModal from './components/Modal';


export default function App() {
  return (

    <Home/>



    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
    //   <Link className="navbar-brand" to="/">Micro Blog</Link>
    //   <ul className="navbar-nav mr-auto">
    //     <li className="nav-item">
    //       <NavLink className="nav-link" exact to="/posts/new">
    //         Create a Micro Post
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink className="nav-link" exact to="/about-us">
    //         About Us
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
}




