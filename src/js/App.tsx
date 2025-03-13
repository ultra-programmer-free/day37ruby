import * as React from "react"
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo"
import {
   createBrowserRouter,
    createRoutesFromElements, 
    Navigate, 
    Route,
    RouterProvider,
   } from "react-router-dom";
import { TodoDetail } from "./pages/TodoDetail";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Navigate to="/todo" replace={true}/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/todo" element={<Todo />}/>
    <Route path="/todo/:id" element={<TodoDetail />} />
    <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export const App = () => <RouterProvider router={router} />
