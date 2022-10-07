import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

function App() {
  return (
    <RouterProvider>
      <Route path='/'><HomeScreen /></Route>
    </RouterProvider>
  );
}

export default App;
