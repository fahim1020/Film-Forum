import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../components/About";
import { Layout } from "../layout/Layout";
import { ReviewPage } from "../pages/ReviewPage";
export const AllRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movie/:movieId/reviews",
        element: <ReviewPage />,
      },
    ],
  },
]);
