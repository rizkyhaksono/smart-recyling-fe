"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/page";
import NotFoundPage from "./pages/not_found";
import AboutPage from "./pages/about/page";
import BlogPage from "./pages/services/blog";
import ReportPage from "./pages/services/report";
import SignUpPage from "./pages/auth/sign_up";
import ContactPage from "./pages/contact/page";
import SignInPage from "./pages/auth/sign_in";
import MobilePage from "./pages/services/mobile";
import ExchangePage from "./pages/services/exchange";

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
