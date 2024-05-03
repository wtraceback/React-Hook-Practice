import { useState } from 'react'

function Test2({ name }) {
    return (
        <div>this is son, {name}</div>
    )
}

function Test1(props) {
    // props: 对象里面包含了父组件传递过来的所有的数据
    // 1. props 可传递任意类型的数据
    // 2. props 是只读对象，想要修改这些数据，只能在父组件中修改（组件的数据，只能由对应的组件来修改）
    return (
        <div>this is son, {props.name}</div>
    )
}

function TestPropsParameters() {
    let [name, setName] = useState('this is TestPropsParameters')

    return (
        <div>
            <Test1 name={name} />
            <Test2 name={name} />
        </div>
    )
}

export default TestPropsParameters