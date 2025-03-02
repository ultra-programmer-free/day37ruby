import * as React from "react"
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";
import {
   createBrowserRouter, 
   createRoutesFromElements, 
   Route, 
   RouterProvider,
  }  from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login />} />
    <Route path="/todo" element={<Todo />} />
    </>,
  ),
);

export const App =() => <RouterProvider router={router} />