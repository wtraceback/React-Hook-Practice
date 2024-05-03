import TestUseState from './components/TestUseState'
import TestUseRef from './components/TestUseRef'
import TestPropsParameters from './components/TestPropsParameters'
import TestCreateContextUseContext from './components/TestCreateContextUseContext'
import TestUseEffect from './components/TestUseEffect'
import TestUseEffectClear from './components/TestUseEffectClear'

function App() {
    return (
        <div className="App">
            hello world
            {/* <hr />
            <TestUseState /> */}

            {/* <hr />
            <TestUseRef /> */}

            {/* <hr />
            <TestPropsParameters />
            <hr />
            <TestCreateContextUseContext /> */}

            <hr />
            <TestUseEffect />
            <hr />
            <TestUseEffectClear />
        </div>
    );
}

export default App;
