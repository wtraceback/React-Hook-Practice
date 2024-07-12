import { useState, useRef } from 'react'

function TestUseRef2() {
    const [time, setTime] = useState((new Date()).getTime())
    /*
        直接定义变量为 null，当使用 setTime 改变 time 的值时，当前组件会重新渲染
        这个时候，代码会从上往下执行，此时 timer 会被重新设置成 null
    */
    // let timer = null

    // 使用 useRef 有一个好处，就是当前组件重新渲染的时候，这个语句不会再执行，不会将 timer 重新设置成 null
    let timer = useRef(null)
    console.log("timer = ", timer);

    function handleStartCick() {
        timer.current = setInterval(() => {
            setTime((new Date()).getTime())
        }, 1000)
    }

    function handleStopClick() {
        clearInterval(timer.current)
    }

    return (
        <div>
            <button onClick={handleStartCick}>start</button>
            <button onClick={handleStopClick}>stop</button>
            <div>{time}</div>
        </div>
    )
}

export default TestUseRef2