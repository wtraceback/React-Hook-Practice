import { useState } from 'react'

function TestUseState() {
    let [form, setForm] = useState({ name: 'jack' })

    let changeForm = () => {
        setForm({ name: 'test' })
        setForm({ ...form, name: 'test' })
        // 使用 setForm({ name: 'test' }) 将直接替换 form 对象，新对象中只有 name 属性，其他属性将丢失。这对于只关心更新一个属性且不依赖于先前状态的情况非常有效。
        // 使用 setForm({ ...form, name: 'test' }) 将创建一个新对象，其中包含 form 对象的所有属性，但是 name 属性将被更新为 'test'。这对于需要保留先前状态的情况更加适用，因为它会将先前状态的其余部分保留下来。
    }

    return (
        <div>
            <div>form.name = ({form.name})</div>
            <button onClick={changeForm}>test</button>
        </div>
    )
}

export default TestUseState