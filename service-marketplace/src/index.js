import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomeLayout from "./components/layouts/HomeLayout";

// Importo Rutas hacia las diferentes paginas
import Root from "./pages/root";
import ErrorPage from "./error-page";
import Contact from "./pages/contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Root />,
      },
      {
        path: "/register",
        element: <Root />,
      },],
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
    children: [
      {
        path: "details",
        element: <Contact />,
      }],
    
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StrictMode>
      
      <HomeLayout>
        <RouterProvider router={router} />
      </HomeLayout>

      
    </StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
