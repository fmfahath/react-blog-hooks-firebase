import React, { useContext } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './screens/home/Home'
import Createpost from './screens/create/Createpost'
import Postdetails from './screens/postdetails/Postdetails'
import Edit from './screens/edit/Edit'
import { ThemeContext } from './context/ThemeContext'
import Login from './screens/login/Login'
import Signup from './screens/signup/Signup'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='create' element={<Createpost />} />
      <Route path='edit/:id' element={<Edit />} />
      <Route path='post/:id' element={<Postdetails />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)

function App() {

  const { theme } = useContext(ThemeContext);
  // console.log(theme)   

  return (
    <>
      <div className={`${theme}`}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
