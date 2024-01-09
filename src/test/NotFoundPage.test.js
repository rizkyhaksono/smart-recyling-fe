import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

test("renders NotFoundPage component", () => {
  render(
    <Router>
      <NotFoundPage />
    </Router>
  );
});
