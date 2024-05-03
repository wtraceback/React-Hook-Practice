import { createContext, useContext } from "react"

// 1. 在顶层组件文件中，通过 createContext 方法创建一个上下文对象 Ctx
// 2. 在顶层组件，通过 Ctx.Provider 组件提供数据
// 3. 在底层组件，通过 useContext 钩子函数使用数据

const MsgContext = createContext()

function B() {
    const msg = useContext(MsgContext)

    return (
        <div>
            this is B component - {msg}
        </div>
    )
}

function A() {
    return (
        <div>
            this is A component
            <B />
        </div>
    )
}

function TestCreateContextUseContext() {
    const msg = "this is app msg"

    return (
        <div>
            <MsgContext.Provider value={msg}>
                this is TestCreateContextUseContext component
                <A />
            </MsgContext.Provider>
        </div>
    )
}

export default TestCreateContextUseContext