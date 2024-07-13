import { useEffect, useState } from "react"

function TestUseEffect() {
    /*
        useEffect 的使用说明
            useEffect(副作用函数, 依赖项)
            副作用操作：在 useEffect 中编写的由渲染本身引起的对接组件外部的操作，社区也把它叫做副作用操作
            useEffect 并不是按照函数组件从上到下顺序执行的，而是在 render 执行结束，页面更新之后，再执行的
            useEffect “副作用函数”的执行时机存在多种情况，根据传入“依赖项”的不同，会有不同的执行表现
                1. 没有依赖项 -> 组件初始渲染 + 组件更新时执行
                2. 空数组依赖 -> 只在初始渲染时执行一次
                3. 添加特定依赖项 -> 组件初始渲染 + 特定依赖项变化时执行
    */

    // 1. 没有依赖项 -> 组件初始渲染 + 组件更新时 执行
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log("副作用函数的执行")
    // })

    // 2. 空数组依赖 -> 只在初始渲染时执行一次
    // useEffect(() => {
    //     console.log("副作用函数的执行")
    // }, [])

    // 3. 添加特定依赖项 -> 组件初始渲染 + 特定依赖项变化时 执行
    const [len, setLen] = useState(0)
    useEffect(() => {
        console.log("副作用函数的执行")
    }, [len])


    return (
        <div>
            TestUseEffect
            <button onClick={() => { setCount(count + 1) }}>count = {count}</button>
            <button onClick={() => { setLen(len + 1) }}>len = {len}</button>
        </div>
    )
}

export default TestUseEffect