
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import MyPosts from "./components/MyPosts/MyPosts";
import Login from "./components/Login/Login";
import LoginAuthentication from "./components/LoginAuthentication/LoginAuthentication";
import Home from "./components/Home/Home";
import Comments from "./components/Comments/Comments";


function App(){
  return(
              < >
                
                <Router>
                  <Navbar />
                  <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/myposts' element={<MyPosts />} />
                    <Route path='/loginauthentication' element={<LoginAuthentication />} />
                    <Route path='/comments' element={<Comments />} />
                  </Routes>
                </Router>
                </>
  );
  
};


export default App;
