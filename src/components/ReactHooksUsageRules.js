import { useState } from "react"

/*
ReactHooks 使用规则
1. 只能在组件中或者其他自定义 Hook 函数中使用
2. 只能在组件的顶层调用，不能嵌套在 if、for、其他函数中
*/

// 错误的情况 1
// const [value, setValue] = useState('')
// function Test1() {
//     return <div>hello world</div>
// }

// 错误的情况 2
// function Test2() {
//     if (Math.random() > 0.5) {
//         const [value, setValue] = useState('')
//     }

//     return <div>hello world</div>
// }

function ReactHooksUsageRules() {
    return <div>请看组件内的错误示例</div>
}

export default ReactHooksUsageRules