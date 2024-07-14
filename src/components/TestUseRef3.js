import { useState, useRef, forwardRef, useEffect } from "react"

const Children = forwardRef((props, ref) => {
    const [value, setValue] = useState('');

    return (
        <input
            ref={ref}
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
        />
    )
})

function TestUseRef3() {
    // 将父组件中定义的 ref 传递到子组件中使用
    // 为了在父组件中操作子组件的元素
    const ref = useRef(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log("使用 useEffect");
        ref.current.focus()
        console.log(ref.current.value);
    }, [status])

    return (
        <div>
            <Children ref={ref} />
            <button onClick={() => { setStatus(!status) }}>聚焦</button>
        </div>
    )
}

export default TestUseRef3