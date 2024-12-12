import React from 'react';
import './App.css';
//import Login from './components/Login';
import Home from './components/Home';
import ProductComponent from './components/ProductComponent';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProductComponent />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
