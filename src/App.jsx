/* eslint-disable no-unused-vars */

"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/page";
import NotFoundPage from "./pages/not_found";
import AboutPage from "./pages/about/page";
import BlogPage from "./pages/services/blog";
import ReportPage from "./pages/services/report";
import SignUpPage from "./pages/sign_up";
import ContactPage from "./pages/contact/page";
import SignInPage from "./pages/sign_in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Menu */}

        <Route path="/" element={<HomePage />} index />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog_events" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Auth */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Services */}
        <Route path="/report" element={<ReportPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
