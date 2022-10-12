import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Statistics from './Statistics/Statistics';
import Quizes from './CQuizes/Quizes';
import Error from './Components/Error/Error';

function App() {
  const router =createBrowserRouter([
{
  path:'/',
  element: <Main/>,
  children: [
    {
      path: '/',
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
     element: <Home/>
    },
    {
      path: 'Blog',
      element: <Blog/>
    },
    {
      path: 'statistics',
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
     element: <Statistics/>
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
    }
  ]
}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
