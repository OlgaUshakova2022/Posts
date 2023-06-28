import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./components/pages/Error";
import PostById from "./components/PostById";






  function App() {
    return (
     
  
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/:id' element={<PostById />} />
                <Route path="/error" element={<Error />} />
                <Route path="/*" element={<Navigate to="/error" replace />} />
            </Routes>
        </BrowserRouter>
        
     
    );
  }

export default App;
