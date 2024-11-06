import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './pages/home/Home';
import Statistics from './pages/statistics/Statistics';
import Dashboard from './pages/dashboard/Dashboard';
import ProductDetails from './components/product/ProductDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=> fetch('/products.json')
      },
      {
        path:"/statistics",
        element:<Statistics/>
      },
      {
        path:"/Dashboard",
        element:<Dashboard/>
      },
      {
        path:"/product/:id",
        element:<ProductDetails/>,
        loader:()=> fetch('/products.json')
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
