"use client";

import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "./redux/api/userApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/home/HomePage";
import ContactPage from "./pages/public/contact/ContactPage";
import AboutPage from "./pages/public/about/AboutPage";
import BlogPage from "./pages/public/services/BlogPage";
import ExchangePage from "./pages/public/services/ExchangePage";
import MobilePage from "./pages/public/services/MobilePage";
import ReportPage from "./pages/public/services/ReportPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/public/auth/SignInPage";
import SignUpPage from "./pages/public/auth/SignUpPage";
import DashboardAdminPage from "./pages/admin/dashboard/DashboardAdminPage";
import DashboardUserPage from "./pages/user/dashboard/DashboardUserPage";
import { Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: userData, isSuccess: userSuccess } = useGetUserQuery();
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("access_token") && cookies.get("refresh_token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const PrivateRoute = ({ element, path }) => {
    return isLoggedIn ? element : <Navigate to="/signin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {isLoggedIn && userSuccess ? (
          <>
            {userData.user.role === "ADMIN" ? <Route path="/admin/dashboard" element={<DashboardAdminPage />} /> : <Route path="/dashboard" element={<DashboardUserPage />} />}
            {/* <Route path="/dashboard/profile" element={<ProfilePage />} /> */}
            {/* <Route path="/report" element={<ReportPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="/exchange" element={<ExchangePage />} /> */}
          </>
        ) : (
          <Route path="*" element={<NotFoundPage />} />
        )}

        <Route path="/report" element={<ReportPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/exchange" element={<ExchangePage />} />

        {/* <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
        <Route path="/dashboard" element={<DashboardUserPage />} /> */}

        {/* Use PrivateRoute for routes that require authentication */}
        {/* <Route path="/report" element={<PrivateRoute element={<ReportPage />} />} />
        <Route path="/blog" element={<PrivateRoute element={<BlogPage />} />} />
        <Route path="/mobile" element={<PrivateRoute element={<MobilePage />} />} />
        <Route path="/exchange" element={<PrivateRoute element={<ExchangePage />} />} /> */}

        {/* Admin dashboard only accessible if logged in */}
        {/* <Route path="/admin/dashboard" element={<PrivateRoute element={<DashboardAdminPage />} />} /> */}

        {/* User dashboard only accessible if logged in */}
        {/* <Route path="/dashboard" element={<PrivateRoute element={<DashboardUserPage />} />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
