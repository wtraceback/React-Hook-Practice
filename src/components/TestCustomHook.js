import { useState } from "react"


function A() {
    const [value, setValue] = useState(true)
    const toggle = () => { setValue(!value) }

    return (
        <div>
            <div>
                <span>A</span>
                <button onClick={toggle}>toggle</button>
            </div>
            { value && <div>A toggle</div>  }
        </div>
    )
}

function B() {
    const [value, setValue] = useState(true)
    const toggle = () => { setValue(!value) }

    return (
        <div>
            <div>
                <span>B</span>
                <button onClick={toggle}>toggle</button>
            </div>
            { value && <div>B toggle</div>  }
        </div>
    )
}

// 封装自定义 hook 的通用思路
// 1. 声明一个以 use 打头的函数
// 2. 在函数体内封装可复用的逻辑（只要是可复用的逻辑）
// 3. 把组件中用到的状态或者回调函数 return 出去（以对象或数组）
// 4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调函数进行使用
function useToggle() {
    // 可复用的逻辑代码（状态、逻辑）
    const [value, setValue] = useState(true)
    const toggle = () => { setValue(!value) }

    // 哪些状态和回调函数需要在其他组件中使用，就 return 出去
    return {
        value,      // 状态
        toggle,     // 方法
    }
}

function C() {
    const { value, toggle } = useToggle()

    return (
        <div>
            <div>
                <span>C 使用了自定义的 hook 函数：useToggle</span>
                <button onClick={toggle}>toggle</button>
            </div>
            { value && <div>C toggle</div>  }
        </div>
    )
}

function TestCustomHook() {
    return (
        <div>
            <div>TestCustomHook</div>
            {/* 正常的使用 toggle */}
            <hr />
            <A />
            <hr />
            <B />

            <hr />
            <C />

            {/* 因为 A 组件和 B 组件中由重复的代码，所以要提取出来 */}
        </div>
    )
}

export default TestCustomHook