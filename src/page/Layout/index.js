import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div>我是一级路由 Layout 组件</div>
            <div>
                {/* <Link to='/about'>关于页</Link> */}
                <Link to='/'>关于页</Link>
            </div>
            <div>
                <Link to='/board'>面板页</Link>
            </div>

            {/* 二级路由出口 */}
            <Outlet />
        </div>
    )
}

export default Layout