import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './pages/HomePage/Index.jsx'
import Service from './pages/About/index.jsx'
import Schedule from './pages/Schedule/index.jsx'
import Contact from './pages/Contact/index.jsx'

const router = createBrowserRouter([
    {path:'/', element:<Homepage/>},
    {path:'/service', element:<Service/>},
    {path:'/sechedule', element:<Schedule />},
    {path:'/contact-us', element:<Contact/>},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
