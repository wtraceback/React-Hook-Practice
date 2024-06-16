import { useSelector, useDispatch } from 'react-redux'
// 导入 actionCreater
import { increment, decrement, jumpToNum } from '../store/modules/counterStore'
import { fetchChannelList } from '../store/modules/channelStore'
import { useEffect } from 'react'

function TestReduxToolkitAndReactRedux() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const { channelList } = useSelector(state => state.channel)

    // 使用 useEffect 触发异步请求执行
    useEffect(() => {
        dispatch(fetchChannelList())
    }, [dispatch])

    return (
        <div>
            <div>TestReduxToolkitAndReactRedux</div>
            <div>
                <span>count is { count }</span>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(jumpToNum(10))}>jump to 10</button>
                <button onClick={() => dispatch(jumpToNum(20))}>jump to 20</button>
            </div>

            <div>
                <ul>
                    {
                        channelList.map(item => <li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TestReduxToolkitAndReactRedux