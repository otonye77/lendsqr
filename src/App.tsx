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
import UserDetails from './components/UserDetails/UserDetails.component';
import { fetchSingleUser, fetchUsers } from './api/api';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootOutlet />}>
        <Route index element={<Login />} />
        <Route path='/dashboard' loader={fetchUsers} element={<Dashboard />}  />
        <Route
          path="/user-details/:id"
          element={<UserDetails />}
          loader={({ params }) => fetchSingleUser(params.id as string)}
        />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App;
