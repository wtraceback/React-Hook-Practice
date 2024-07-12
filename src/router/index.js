import { createBrowserRouter, createHashRouter } from 'react-router-dom'

/*
路由模式
    history 模式
        createBrowserRouter
        url/login
        底层原理 history对象+pushState事件
        需要后端支持
    hash 模式
        createHashRouter
        url/#/login
        底层原理 监听hashChange事件
        不需要后端支持
*/

import Login from '../page/login'
import Home from '../page/home'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFound from '../page/NotFound'
import App from '@/App'

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
        path: '/app',
        element: <App />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router