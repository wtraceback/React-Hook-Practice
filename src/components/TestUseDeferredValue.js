import React, { useState, useDeferredValue, memo } from 'react'

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

function TestUseDeferredValue() {
    const [inputValue, setInputValue] = useState('')
    // useDeferredValue 是一个 React Hook，可以让你延迟更新 UI 的某些部分
    const deferredInputValue = useDeferredValue(inputValue)

    return (
        <>
            <input
                value={inputValue || ''}
                onChange={(e) => {setInputValue(e.target.value)}}
                placeholder={"TestUseDeferredValue"}
            />
            <Todos text={deferredInputValue} />
        </>
    )
}

export default TestUseDeferredValue