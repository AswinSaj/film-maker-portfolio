import AboutUs from "./pages/AboutUs/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoot from "./pages/HomeRoot";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    children: [
      { path: "connect", element: <AboutUs /> },
      { index: true, element: <Home /> },
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
