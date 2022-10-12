import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Statistics from './Statistics/Statistics';
import Quizes from './Components/Quizes/Quizes';

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
