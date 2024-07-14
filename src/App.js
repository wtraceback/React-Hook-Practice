// import TestUseState from './components/TestUseState'
// import TestUseRef from './components/TestUseRef'
// import TestUseRef2 from './components/TestUseRef2'
// import TestPropsParameters from './components/TestPropsParameters'
// import TestCreateContextUseContext from './components/TestCreateContextUseContext'
// import TestUseEffect from './components/TestUseEffect'
// import TestUseEffectClear from './components/TestUseEffectClear'
// import TestCustomHook from './components/TestCustomHook'
// import ReactHooksUsageRules from './components/ReactHooksUsageRules'
// import TestReduxToolkitAndReactRedux from './components/TestReduxToolkitAndReactRedux'
// import TestUseMemo from './components/TestUseMemo'
// import TestUseCallback from './components/TestUseCallback'
import TestUseRef3 from './components/TestUseRef3'


function App() {
    return (
        <div className="App">
            {/* <TestUseState /> */}

            {/* <TestUseRef /> */}
            {/* <TestUseRef2 /> */}
            <TestUseRef3 />

            {/* <TestPropsParameters />
            <hr />
            <TestCreateContextUseContext /> */}

            {/*
                组件存在的整个过程称为一个生命周期
                挂载(mount) -> 更新(update) -> 卸载(unmount)
                组件的挂载和销毁只有一次

                useEffect 存在的整个过程称为一个生命周期
                创建执行 -> 销毁
                组件里的 useEffect 的挂载和销毁可能会有很多次
            */}
            {/* <TestUseEffect />
            <hr />
            <TestUseEffectClear /> */}

            {/* <TestCustomHook /> */}

            {/* <ReactHooksUsageRules /> */}

            {/* <TestReduxToolkitAndReactRedux /> */}

            {/* <TestUseMemo /> */}

            {/* <TestUseCallback /> */}
        </div>
    );
}

export default App;
