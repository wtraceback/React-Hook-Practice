import { useSearchParams, useParams } from "react-router-dom"

const Home = () => {
    // const [params] = useSearchParams()
    const params2 = useParams()

    return (
        <div>
            <div>hello world Home</div>

            {/* <div>searchParams 传参</div>
            <div>id = {params.get('id')}</div>
            <div>name = {params.get('name')}</div> */}

            <div>params 传参</div>
            <div>id2 = {params2.id}</div>
            <div>name2 = {params2.name}</div>
        </div>
    )
}

export default Home