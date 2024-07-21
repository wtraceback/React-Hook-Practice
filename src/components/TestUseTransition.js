import React, { useState, memo, useTransition, startTransition } from 'react'

// memo 在传入的参数 text 不变的情况下，就会用之前的缓存，不会重新渲染
// memo 允许你的组件在 props 没有改变的情况下跳过重新渲染
const Todos = memo(({text}) => {
    const items = []
    for (let i = 0; i < 100; i++) {
        items.push(<div key={i}>{text}</div>)
    }

    const startTime = (new Date()).getTime();
    while ((new Date()).getTime() - startTime < 100) {
        ;
    }

    return <div>{items}</div>
})

function TestUseTransition() {
    const [inputValue, setInputValue] = useState('')
    const [deferredInputValue, setDeferredInputValue] = useState('')
    // 使用 startTransition 来实现 useDeferredValue 的效果，延迟更新 UI 的某些部分
    // 除了在 useTransition 中返回 startTransition 之外，react 还直接提供了 startTransition 函数，可以直接引入
    // const [isPending, startTransition] = useTransition()

    function handleOnChange(e) {
        setInputValue(e.target.value)
        // startTransition 在浏览器空闲的时候才执行
        startTransition(() => {
            setDeferredInputValue(e.target.value)
        })
    }

    return (
        <>
            <input
                value={inputValue || ''}
                onChange={handleOnChange}
                placeholder={"TestUseTransition"}
            />
            <Todos text={deferredInputValue} />
        </>
    )
}

export default TestUseTransition