import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from 'axios';
import { App } from '../App/App';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
]);


function AppRouter() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter;
