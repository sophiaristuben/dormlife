import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import './index.css';
import App from './Pages/App';
import { Home } from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import { Pomona } from './Components/TabComponents/Schools/Pomona';
import { Scripps } from './Components/TabComponents/Schools/Scripps';
import { CMC } from './Components/TabComponents/Schools/CMC';
import { Mudd } from './Components/TabComponents/Schools/Mudd';
import { Pitzer } from './Components/TabComponents/Schools/Pitzer';
import RoommateSurvey from './Components/TabComponents/SurveyComponent/RoommateSurvey';
import ReviewForm from './Components/DormNav/Popup/ReviewForm.js';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "pomona",
        element: <Pomona />, // need to change this later to a different component
      },
      {
        path: "scripps",
        element: <Scripps />, // need to change this later to a different component
      },
      {
        path: "cmc",
        element: <CMC />, // need to change this later to a different component
      },
      {
        path: "pitzer",
        element: <Pitzer />, // need to change this later to a different component
      },
      {
        path: "mudd",
        element: <Mudd />, // need to change this later to a different component
      },
      {
        path: "survey",
        element: <RoommateSurvey />, // need to change this later to a different component
      },
      {
        path: "add-review",
        element: <ReviewForm />, 
      }
    ]
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
