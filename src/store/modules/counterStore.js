import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name: 'counter',
    // 初始化状态数据
    initialState: {
        count: 0,
    },
    // 修改数据的同步方法
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        jumpToNum(state, action) {
            state.count = action.payload
        },
    }
})

// 解构出创建 action 对象的函数 actionCreater
const { increment, decrement, jumpToNum } = counterStore.actions
// 获取 reducer 函数
const counterReducer = counterStore.reducer

// 导出创建 action 对象的函数和 reducer 函数
// 以按需导出的方式导出 actionCreater
export { increment, decrement, jumpToNum }
// 以默认导出的方式导出 reducer
export default counterReducer