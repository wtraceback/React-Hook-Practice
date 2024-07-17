import { Profiler } from 'react';

// import TestUseState from './components/TestUseState'
// import TestUseRef from './components/TestUseRef'
// import TestUseRef2 from './components/TestUseRef2'
// import TestUseRef3 from './components/TestUseRef3'
// import TestUseRef4 from './components/TestUseRef4'
// import TestPropsParameters from './components/TestPropsParameters'
// import TestCreateContextUseContext from './components/TestCreateContextUseContext'
// import TestUseEffect from './components/TestUseEffect'
// import TestUseEffectClear from './components/TestUseEffectClear'
// import TestCustomHook from './components/TestCustomHook'
// import ReactHooksUsageRules from './components/ReactHooksUsageRules'
// import TestReduxToolkitAndReactRedux from './components/TestReduxToolkitAndReactRedux'
// import TestUseMemo from './components/TestUseMemo'
// import TestUseCallback from './components/TestUseCallback'
import TestProfiler from './components/TestProfiler'

function renderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // 对渲染时间进行汇总或记录
    // id：字符串，为 <Profiler> 树的 id 属性，用于标识刚刚提交的部分。
    // phase：为 "mount"、"update" 或 "nested-update" 中之一。
    // actualDuration：在此次更新中，渲染 <Profiler> 组件树的毫秒数。
    // baseDuration：估算在没有任何优化的情况下重新渲染整棵 <Profiler> 子树所需的毫秒数。
    // startTime：当 React 开始渲染此次更新时的时间戳。
    // commitTime：当 React 提交此次更新时的时间戳。

    console.log(`id=${id}, phase=${phase}, actualDuration=${actualDuration}`);
    console.log(`baseDuration=${baseDuration}, startTime=${startTime}, commitTime=${commitTime}`);
}


function App() {
    return (
        <div className="App">
            {/* <TestUseState /> */}

            {/* <TestUseRef /> */}
            {/* <TestUseRef2 /> */}
            {/* <TestUseRef3 /> */}
            {/* <TestUseRef4 /> */}

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

            {/* 使用 <Profiler> 包裹组件树，以测量其渲染性能。 */}
            <Profiler id="app" onRender={renderCallback}>
                <TestProfiler />
            </Profiler>
        </div>
    );
}

export default App;
