import { useState, useCallback } from "react"

function TestUseCallback() {
    const [content, setContent] = useState('')

    // useCallback 避免 render 过程返回重新生成函数
    const handleContentChange = useCallback((e) => {
        setContent(e.target.value)
    }, [])

    // 每次 content 有改变，都会重新生成一次函数
    // const handleContentChange = function(e) {
    //     setContent(e.target.value)
    // }

    return (
        <input value={content} onChange={handleContentChange} />
    )
}

export default TestUseCallback