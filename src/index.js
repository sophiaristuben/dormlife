import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { Home } from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/maps",
    element: <App />,
    children: [
      {
        path: "pomona",
        element: <App />, // need to change this later to a different component
      },
      {
        path: "scripps",
        element: <App />, // need to change this later to a different component
      },
      {
        path: "cmc",
        element: <App />, // need to change this later to a different component
      },
      {
        path: "pitzer",
        element: <App />, // need to change this later to a different component
      },
      {
        path: "mudd",
        element: <App />, // need to change this later to a different component
      },

    ],
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
