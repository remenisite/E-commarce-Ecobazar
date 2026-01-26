import React from "react";

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/Signin/Signin";
import Error from "./pages/Error";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="*" element={<Error />}></Route>
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
