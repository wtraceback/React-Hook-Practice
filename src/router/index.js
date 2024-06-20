import { createBrowserRouter } from 'react-router-dom'

import Login from '../page/login'
import Home from '../page/home'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'board',
                element: <Board />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        // path: '/home',
        path: '/home/:id/:name',
        element: <Home />,
    }
])

export default router