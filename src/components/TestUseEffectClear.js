import { useEffect, useState } from "react"

function Test() {
    /*
        useEffect 的使用说明
            清除副作用（清除副作用的函数最常见的执行时机是在 组件卸载时自动执行）
                useEffect(() => {
                    // 实现副作用操作逻辑

                    return () => {
                        // 清楚副作用逻辑
                    }
                }, [])
    */

    // 渲染时开启一个定时器
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("副作用函数的执行");
        }, 1000)

        return () => {
            // 清除副作用（组件卸载时）
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            Hello World
        </div>
    )
}

function TestUseEffectClear() {
    const [show, setShow] = useState(true)

    return (
        <div>
            { show && <Test></Test> }
            TestUseEffectClear
            <button onClick={() => { setShow(false) }}>清除 Test 组件</button>
        </div>
    )
}

export default TestUseEffectClear