import { createSlice } from '@reduxjs/toolkit'
import { setToken as _setToken, getToken, http } from '@/utils'


const persistenceStore = createSlice({
    name: 'persistence',
    // 数据状态
    initialState: {
        token: getToken() || ''
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            // localStorage 存一份
            _setToken(action.payload)
        }
    }
})


// 异步请求部分
const { setToken } = persistenceStore.actions

// 异步方法，完成登录获取 token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 1. 发送异步请求
        const res = await http.post('/authorizations', loginForm)
        // 2. 提交同步 action 进行 token 的存入
        dispatch(setToken(res.data.token))
    }
}

export { setToken, fetchLogin }

// 获取 reducer 函数
const persistenceReducer = persistenceStore.reducer
export default persistenceReducer