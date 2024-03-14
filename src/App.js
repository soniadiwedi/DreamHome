
import './App.css';
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";    


import Layout from './pages/layout/Layout';
import HomePage from './pages/homePage.jsx/HomePage';
import ListPage from './pages/listingPage/listPage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout/>,
      children:[{path:"/" ,element:<HomePage/>}]
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
  ]);
  return (
    <div className="layout">

      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
