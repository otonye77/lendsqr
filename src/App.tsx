import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login';
import RootOutlet from './pages/RootOutlet/RootOutlet';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootOutlet />}>
        <Route index element={<Login />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App;
