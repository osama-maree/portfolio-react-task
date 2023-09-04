import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./component/NavBar.jsx";
import "./app.css";
import Layout from "./component/Layout.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Hello world!</div>,
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
