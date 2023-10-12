import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import RootOutlet from './pages/RootOutlet/RootOutlet';
import DashboardErrorPage from './pages/DashboardError/DashboardError';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootOutlet />}>
        <Route index element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} errorElement={DashboardErrorPage} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App;
