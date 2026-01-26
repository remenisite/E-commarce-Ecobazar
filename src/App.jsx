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

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
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
