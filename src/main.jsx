import { StrictMode } from "react";
import ErrorPage from "./pages/error-page";
import HighlightPage from "./pages/highlight";
import DashPage from "./pages/dash/dash";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dash",
        element: <DashPage />,
      },
      {
        path: "highlight",
        element: <HighlightPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
