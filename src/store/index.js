import { configureStore } from "@reduxjs/toolkit"

// 导出子模块 reducer
import counterReducer from "./modules/counterStore"

// 创建根 store 组合子模块
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store