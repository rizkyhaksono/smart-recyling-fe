/* eslint-disable no-unused-vars */
// import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./pages/not_found";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
