/* eslint-disable no-unused-vars */
// import { useState } from "react";

"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not_found";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} /> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
