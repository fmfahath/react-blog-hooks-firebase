import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './screens/home/Home'
import Createpost from './screens/create/Createpost'
import Postdetails from './screens/postdetails/Postdetails'
import Edit from './screens/edit/Edit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='create' element={<Createpost />} />
      <Route path='edit/:id' element={<Edit />} />
      <Route path='post/:id' element={<Postdetails />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
