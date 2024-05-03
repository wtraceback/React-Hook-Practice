import { useRef } from 'react'

function TestUseRef() {
    // React 中获取 DOM
    /*
        1. useRef 生成 ref 对象，然后绑定到 dom 标签上
        2. dom 可用时，ref.current 获取 dom
        3. 渲染完毕之后，dom 生成之后，才可以使用
    */
    let inputRef = useRef(null)
    let showDom = () => {
        console.log(inputRef.current)
        console.dir(inputRef.current)
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={showDom}>获取 dom</button>
        </div>
    )
}

export default TestUseRef