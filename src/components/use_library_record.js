import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

lodash
classnames
uuid
moment.js
day.js
json-server
axios
react-router-dom
redux
    方式一 纯 redux 的使用步骤：
        1. 定义一个 reducer 函数（初始值）
        2. 使用 createStore 方法，将 reducer 传入方法中，生成一个 store 实例对象
        3. 使用 store 实例的 subscribe 方法订阅数据的变化
        4. 使用 store 实例的 dispatch 方法提交 action 对象来出发数据变化
        5. 使用 store 实例的 getState 方法来获取最新的状态数据，然后更新到视图中
        总共4部分，环状的： Action -> Reducer -> Store -> View

    方式二 在 React 中使用 redux，官方要求安装两个其他插件 Redux-Toolkit 和 react-redux
        npm i @reduxjs/toolkit react-redux
        Redux-Toolkit       官方推荐编写 Redux 逻辑的方式，是一套工具的集合集，简化书写方式
            简化 store 的配置方式
            内置 immer 支持可变式状态修改
            内置 thunk 更好的异步创建
            createSlice
            configureStore
        react-redux     用来链接 Redux 和 React 组件的一个中间件
            Provider
            useSelector
            useDispatch
            Redux  ----获取状态----> React 组件
                      react-redux
                   <----更新状态----

useState
useRef
createContext, useContext   // 使用 context 机制跨层传递数据
useEffect
自定义 hook 实现


// ===============================
环境搭建
    使用 CRA 创建项目，并安装必要依赖
    1. Redux 状态管理： @reduxjs/toolkit react-redux
    2. 路由： react-router-dom
    3. 时间处理： dayjs
    4. class类名处理： classnames
    5. 移动端组件库： antd-mobile
    6. 请求插件： axios
    7. 路径解析配置： craco     @craco/craco
    8. 目录解构
        apis        接口
        assets      静态资源
        components  通用组件
        pages       页面级组件
        router      路由Router
        store       Redux状态
        utils       工具函数
    9. 使用 scss
        scss 是一种后缀名为 .scss 的预编译CSS语言，支持一些原生CSS不支持的高级用法，
        比如：变量使用，嵌套语法等。
            yarn add sass
            style.scss --> sass（转换） --> style.css
