import { useSelector, useDispatch } from 'react-redux'
// 导入 actionCreater
import { increment, decrement, jumpToNum } from '../store/modules/counterStore'

function TestReduxToolkitAndReactRedux() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>TestReduxToolkitAndReactRedux</div>
            <div>
                <span>count is { count }</span>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <button onClick={() => dispatch(jumpToNum(10))}>jump to 10</button>
                <button onClick={() => dispatch(jumpToNum(20))}>jump to 20</button>
            </div>
        </div>
    )
}

export default TestReduxToolkitAndReactRedux