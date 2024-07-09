import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export { router };
