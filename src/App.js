import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Blog from './Component/Blog/Blog';
import Statistics from './Statistics/Statistics';
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Quizes from './Component/Quizes/Quizes';
import Error from './Error/Error';

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