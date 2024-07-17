import { useState } from "react"

function TestProfiler() {
    const [name, setName] = useState('初始值')

    return (
        <div>
            <div>name: {name}</div>
            <button onClick={() => {setName("改变之后的值")}}>改变</button>
        </div>
    )
}

export default TestProfiler