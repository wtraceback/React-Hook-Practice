import { createSlice } from '@reduxjs/toolkit'
import { setToken as _setToken, getToken } from '../../utils'


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
export { setToken }

const persistenceReducer = persistenceStore.reducer
export default persistenceReducer