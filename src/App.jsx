import React, { useContext } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './screens/home/Home'
import Createpost from './screens/create/Createpost'
import Postdetails from './screens/postdetails/Postdetails'
import Edit from './screens/edit/Edit'
import { ThemeContext } from './context/ThemeContext'
import Login from './screens/login/Login'
import Signup from './screens/signup/Signup'
import Dashboard from './screens/dashboard/Dashboard'
import { useAuthContext } from './hooks/useAuthContext'




function App() {

  const { user, isAuthReady } = useAuthContext();

  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route index element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='create' element={user ? <Createpost /> : <Navigate to='/login' />} />
        <Route path='edit/:id' element={user ? <Edit /> : <Navigate to='/login' />} />
        <Route path='post/:id' element={user ? <Postdetails /> : <Navigate to='/login' />} />
        <Route path='login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route >
    )
  )

  return (
    <>
      <div className={`${theme}`}>
        {/* isAuthReady - prevent login page displayed while refreshing page */}
        {isAuthReady && <RouterProvider router={router} />}
      </div>
    </>
  )
}

export default App
