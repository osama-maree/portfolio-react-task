import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./app.css";
import Layout from "./component/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <div>Page Note Found</div>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
