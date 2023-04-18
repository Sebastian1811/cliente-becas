import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home'
import Detail from './routes/detail'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Card from './components/card'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Card />
  </React.StrictMode>,
)
