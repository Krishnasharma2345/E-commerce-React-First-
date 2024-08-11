import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <div>404 status not found</div>,
  },
  {
    path: '/about',
    element: <About/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
