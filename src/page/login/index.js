import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>hello world Login</div>

            <hr />
            <div>声明式导航</div>
            <Link to="/home">跳转到主页</Link>

            <hr />
            <div>编程式导航/命令式导航</div>
            <button onClick={() => {navigate('/home')}}>跳转到主页</button>

            <hr />
            <div>导航跳转传参： searchParams 传参</div>
            {/*
                navigate('/home?id=1001&name=jack')

                const [params] = useSearchParams()
                let id = params.get('id')
             */}
            <button onClick={() => {navigate('/home?id=1001&name=jack')}}>searchParams 传参</button>

            <hr />
            <div>导航跳转传参： params 传参</div>
            {/*
                navigate('/home/1001/jack')

                路由中加入可变参数  '/home/:id/:name'

                const params = useParams()
                let id = params.get('id')
             */}
            <button onClick={() => {navigate('/home/1001/name')}}>searchParams 传参</button>
        </div>
    )
}

export default Login