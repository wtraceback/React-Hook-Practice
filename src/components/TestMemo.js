import { useState, memo } from "react"

// 当 name 或者 address 发生变化的时候，Child 组件都会重新被渲染
// function Child({name}) {
//     console.log("Child render")
//     return <div>{name}</div>
// }

// 组件所依赖的 props 没有发生变化，那么这个组件就不进行重新渲染，使用缓存
// const Child = memo(({name}) => {
//     console.log("Child render")
//     return <div>{name}</div>
// })


// 组件所依赖的 props 没有发生变化，那么这个组件就不进行重新渲染，使用缓存
// name 发生变化的时候，默认使用缓存，如果是 address 发生变化的时候，就进行重新渲染
const Child = memo(({name, address}) => {
    console.log("Child render")
    return <div>{name}{address}</div>
}, (originProps, props) => {
    // 如果 address 发生变化，不用缓存
    if (originProps.address !== props.address) {
        return false
    } else {
        // 否则，使用缓存
        return true
    }
})


function TestMemo() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div>
            <div>
                name: <input value={name || ''} onChange={(e) => {setName(e.target.value)}} placeholder={"TestMemo"} />
            </div>
            <div>
                address: <input value={address || ''} onChange={(e) => {setAddress(e.target.value)}} placeholder={"TestMemo"} />
            </div>
            {/* <Child name={name}></Child> */}
            <Child name={name} address={address}></Child>
        </div>
    )
}

export default TestMemo