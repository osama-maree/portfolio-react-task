import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./app.css";
import Layout from "./component/Layout.jsx";
import Home from "./pages/Home.jsx";
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
        path: "/h",
        element: <div>Hello world!s</div>,
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
