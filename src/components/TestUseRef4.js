import { useState, useRef, forwardRef, useEffect, useImperativeHandle } from "react"

const Children = forwardRef((props, ref) => {
    const inputRef = useRef(null)

    // 父组件调用子组件的 DOM 时，能够对 DOM 节点上的返回内容中转做一层限制
    useImperativeHandle(ref, () => {
        return {
            blur() {
                inputRef.current.blur()
            }
        }
    }, [])

    const [value, setValue] = useState('');

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
        />
    )
})

function TestUseRef4() {
    // 将父组件中定义的 ref 传递到子组件中使用
    // 为了在父组件中操作子组件的元素
    const ref = useRef(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log("使用 useEffect");
        ref.current.blur()
        console.log(ref.current.value);
    }, [status])

    return (
        <div>
            <Children ref={ref} />
            <button onClick={() => { setStatus(!status) }}>聚焦</button>
        </div>
    )
}

export default TestUseRef4