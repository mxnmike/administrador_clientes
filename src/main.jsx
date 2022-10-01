import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewClient, { action as newClientAction } from './pages/NewClient'
import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from './pages/EditarCliente'
import Index, { loader as clientsLoader } from './pages/Index'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/:clientId/eliminar',
        action: eliminarClienteAction,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
