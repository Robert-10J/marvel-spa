import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import Layout from './pages/Layout.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Comic from './pages/Comic.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/comic/:id',
        element: <Comic/>
      }
    ]
  },
])