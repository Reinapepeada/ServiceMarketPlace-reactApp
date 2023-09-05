import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/CounterButton";
import Input from "./components/InputAge";
import HomeLayout from "./components/layouts/HomeLayout";

// Importo Rutas hacia las diferentes paginas
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
      {/* <h1>Hello, world!</h1>
        <Counter />
        <hr />
        <Input /> */}
    </StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
