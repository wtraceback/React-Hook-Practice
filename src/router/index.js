import { createBrowserRouter } from 'react-router-dom'

import Login from '../page/login'
import Home from '../page/home'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFound from '../page/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                // path: 'about',
                // 设置为默认二级路由，一级路由访问的时候，它也能得到渲染
                index: true,
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
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router