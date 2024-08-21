import './App.css';
import { Login } from "./components/Login.jsx";
import { SignUp } from "./components/SignUp.jsx";
import { Home } from "./components/Home.jsx"; // Ensure this matches the actual file name
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
