import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

//components
import App from './App';
import UserList from './pages/UserList/UserList';
import Header from './components/Header';
import User from './pages/User';
import Login from './pages/Login';

const Layout = () => (
    <>
      <Header/>
      <Outlet />
    </>
    );

    const router = createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <App /> },
          { path: '/users', element: <UserList /> },
          { path: '/users/:id', element: <User />},
          { path: '/login', element: <Login />}
        ]
      }
    ]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
