
import './App.css';
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";    


import Layout from './pages/layout/Layout';
import HomePage from './pages/homePage.jsx/HomePage';
import ListPage from './pages/listingPage/listPage';
import SinglePage from './pages/singlePage/SinglePage';
import Profilepage from './pages/profilePage/Profilepage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<Profilepage/>
        }
      ]
    }
  ]);

  return (
    <div className="layout">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
