import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TemplateLayouts from "./layouts/TemplateLayouts";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import HomeView from "./pages/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplateLayouts />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
