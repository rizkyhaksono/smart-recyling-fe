"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/about/AboutPage";
import BlogPage from "./pages/services/BlogPage";
import ReportPage from "./pages/services/ReportPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ContactPage from "./pages/contact/ContactPage";
import SignInPage from "./pages/auth/SignInPage";
import MobilePage from "./pages/services/MobilePage";
import ExchangePage from "./pages/services/ExchangePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Menu */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Auth */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Services */}
        <Route path="/report" element={<ReportPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/exchange" element={<ExchangePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
