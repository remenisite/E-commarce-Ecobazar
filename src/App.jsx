import React from "react";

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";


import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/wish" element={<Wishlist />}></Route>
        </Route>
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
