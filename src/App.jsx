import React from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/home/Home'

const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path='/' element={<LayoutOne />}>
      <Route index element={<Home />} ></Route>

      
      </Route>
    </Route>
  ))
  return (
    <>

    <RouterProvider router={myRoute} />
      
    </>
  )
}

export default App
