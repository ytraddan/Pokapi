import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import About from "./routes/About.jsx";
import Search from "./routes/Search.jsx";
import Random from "./routes/Random.jsx";
import Compare from "./routes/Compare.jsx";
import Pokemon from "./routes/Pokemon.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/random",
        element: <Random />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/pokemon/:name",
        element: <Pokemon />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
