import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Login from './routes/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Login />,
  },
]);


function App() {
  return     <RouterProvider router={router} />;
}

export default App;
