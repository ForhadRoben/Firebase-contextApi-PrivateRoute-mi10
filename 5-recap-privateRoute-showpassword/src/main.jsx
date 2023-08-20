import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import MainLayout from './components/MainLayout'
// import Home from './components/Home'
// import Login from './components/Login'
// import Register from './components/Register'
import AuthProviders from './providers/AuthProviders'
import { router } from './routes/Routes'
// import Profile from './components/Profile'
// import PrivateRoute from './routes/PrivateRoute'
// import Career from './components/Career'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/login',
//         element: <Login></Login>
//       },
//       {
//         path: '/register',
//         element: <Register></Register>
//       },
//       {
//         path: '/profile',
//         element: <PrivateRoute><Profile></Profile></PrivateRoute>
//       },
//       {
//         path: '/career',
//         element: <PrivateRoute><Career></Career></PrivateRoute>
//       },

//     ]
//   },

// ])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>
  </React.StrictMode>,
)
