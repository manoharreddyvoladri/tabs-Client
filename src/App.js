import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Blog from "./pages/blog/Blog";
import Team from "./pages/team/Team1";

import React from "react";
import Register from"./pages/register/register";
import Testimonials from "./testmonial/testmonal";

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/testmonial" element={<Testimonials/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/team" element={<Team/>}/>
        

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
