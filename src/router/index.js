import { createBrowserRouter } from 'react-router-dom'

import Login from '../page/login'
import Home from '../page/home'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    }
])

export default router