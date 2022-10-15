import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Blog from './Component/Blog/Blog';
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Quizes from './Component/Quizes/Quizes';
import Error from './Component/Error/Error';
import Statistics from './Component/Statistics/Statistics';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: ()=>fetch ('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        
        {
          path: 'statistics',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics />
        },
        {
          path: '/quizes/:id',
          loader: ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <Quizes />
        },
        {
          path: '*',
          element: <Error />
        },
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;